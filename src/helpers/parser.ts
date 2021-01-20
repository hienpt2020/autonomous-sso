import WorkLayout from 'src/models/WorkLayout';
import { User } from 'src/models';
import _ from 'lodash';
import WorkSpace from 'src/models/WorkSpace';
import WorkPlace from 'src/models/WorkPlace';
import { BookingHistory } from 'src/models/BookingHistory';
import { parseMapAddress } from './locationHelper';
import Asset from 'src/models/Asset';
import moment from 'moment';
import { DEFAULT_IMAGES, ROLES } from 'src/common/constant';
import Device from '../models/Device';

export class ParserImpl implements IParser {
    parseUser(responseData: any): User {
        const result = new User();
        result.dateCreated = _.get(responseData, 'date_created');
        result.dateModified = _.get(responseData, 'date_modified');
        result.email = _.get(responseData, 'email');
        result.status = _.get(responseData, 'status');
        result.fullName = _.get(responseData, 'full_name');
        result.address = _.get(responseData, 'address');
        result.userAvatar = _.get(responseData, 'user_avatar');
        result.phone = _.get(responseData, 'phone');
        result.code = _.get(responseData, 'code');
        result.referralCode = _.get(responseData, 'referral_code');
        result.accountBirthday = _.get(responseData, 'account_birthday');
        result.source = _.get(responseData, 'source');
        result.isVerifiedEmail = _.get(responseData, 'is_verified_email');
        result.accessToken = _.get(responseData, 'accessToken');
        return result;
    }
    parseWorkspace(responseData: any): WorkSpace {
        const result = new WorkSpace();
        result.id = _.get(responseData, 'id');
        result.createdAt = _.get(responseData, 'created_at');
        result.updatedAt = _.get(responseData, 'updated_at');
        result.deletedAt = _.get(responseData, 'deleted_at');
        result.name = _.get(responseData, 'name');
        result.code = _.get(responseData, 'code');
        result.status = _.get(responseData, 'status');
        result.members = _.get(responseData, 'members');
        result.roleByCurrentUser = _.get(responseData, 'role_by_current_user');
        result.isAdmin = ROLES.ADMIN == _.get(responseData, 'role_by_current_user');

        return result;
    }
    parseWorkLayout(responseData: any): WorkLayout {
        const extra = JSON.parse(responseData.extra);
        const policy = extra && extra.policies ? extra.policies : '';
        const address = parseMapAddress(
            responseData.street,
            responseData.city,
            responseData.state,
            responseData.country,
        );
        const image =
            responseData.working_space_layout_images && responseData.working_space_layout_images.length > 0
                ? responseData.working_space_layout_images[0].image_url
                : '';

        const result = new WorkLayout();
        result.id = responseData.id;
        result.name = responseData.name;
        result.address = address;
        result.policy = policy;
        result.image = image;
        return result;
    }
    parseWorkPlace(responseData: any): WorkPlace {
        const result = new WorkPlace();
        result.id = responseData.id;
        result.mapId = responseData.working_space_layout_id;
        result.name = responseData.working_place_types.type_name + ' ' + responseData.code;
        result.address = parseMapAddress(
            responseData.working_space_layout.street,
            responseData.working_space_layout.city,
            responseData.working_space_layout.state,
            responseData.working_space_layout.street.country,
        );
        result.devices = responseData.assets_details
            ? responseData.assets_details.map((unit: any) => new Asset(unit.assets_stock.assets))
            : [];
        result.tags = responseData.working_place_tags
            ? responseData.working_place_tags?.map((tag: any) => tag.tag)
            : [];
        result.imageUrls = responseData.working_p_lace_images
            ? responseData.working_p_lace_images.map((image: any) => image.image_url)
            : [];
        result.thumbImageUrl =
            responseData.working_p_lace_images && responseData.working_p_lace_images.length > 0
                ? responseData.working_p_lace_images[0].image_url
                : '';
        return result;
    }
    parseBookingHistory(responseData: any): BookingHistory {
        const result = new BookingHistory();
        result.id = responseData.id;
        result.name =
            responseData.working_place.working_place_types.type_name + ' ' + responseData.working_place.code.toString();
        result.address = parseMapAddress(
            responseData.working_place.working_space_layout.street,
            responseData.working_place.working_space_layout.city,
            responseData.working_place.working_space_layout.state,
            responseData.working_place.working_space_layout.street.country,
        );
        result.timeFrom = moment(responseData.from).format('DD MMM, YYYY');
        result.timeTo = moment(responseData.to).format('DD MMM, YYYY');
        result.workspace = responseData.working_place.working_space_layout.name;
        result.placeId = responseData.working_place.id;
        result.mapId = responseData.working_place.working_space_layout.id;
        result.code = responseData.code;
        return result;
    }

    parseStringToBytes(str: string) {
        return str.split('').map(function (x: any) {
            return x.charCodeAt(0);
        });
    }
    parseBytesToString(bytes: any): string {
        return bytes
            .map(function (x: any) {
                return String.fromCharCode(x);
            })
            .join('');
    }
    parseDevice(responseData: any): Device {
        const result = new Device();
        result.id = _.get(responseData, 'id');
        result.createdAt = _.get(responseData, 'created_at');
        result.updatedAt = _.get(responseData, 'updated_at');
        result.deletedAt = _.get(responseData, 'deleted_at');
        result.bookedBy = _.get(responseData, 'booked_by');
        result.bookingId = _.get(responseData, 'booking_id');
        result.code = _.get(responseData, 'code');
        result.endTime = _.get(responseData, 'end_time');
        result.hubId = _.get(responseData, 'hub_id');
        result.id = _.get(responseData, 'id');
        result.isCheckin = _.get(responseData, 'is_checkin');
        result.isEnded = _.get(responseData, 'is_ended');
        result.isSetPin = _.get(responseData, 'is_set_pin');
        result.startTime = _.get(responseData, 'startTime');
        result.userId = _.get(responseData, 'user_id');
        result.workingLayoutId = _.get(responseData, 'working_layout_id');
        result.image = _.get(responseData, 'image') || DEFAULT_IMAGES.DEVICE;
        return result;
    }
}
interface IParser {
    parseUser(responseData: any): User;
    parseWorkspace(responseData: any): WorkSpace;
    parseBytesToString(bytes: any): String;
    parseStringToBytes(str: string): any[];
    parseWorkPlace(responseData: any): WorkPlace;
    parseWorkLayout(responseData: any): WorkLayout;
    parseBookingHistory(responseData: any): BookingHistory;
    parseDevice(responseData: any): Device;
}

export const Parser = new ParserImpl();
