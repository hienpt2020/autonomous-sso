import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import WorkLayout from 'src/models/WorkLayout';
import { User } from 'src/models';
import _ from 'lodash';
import WorkSpace from 'src/models/WorkSpace';
import WorkPlace from 'src/models/WorkPlace';
import { BookingHistory } from 'src/models/BookingHistory';
import { parseMapAddress } from './locationHelper';
import Asset from 'src/models/Asset';
import Device from 'src/models/Device';
import { ROLES } from 'src/common/constant';
import { NotificationMessage } from 'src/models/NotificationMessage';

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
        result.userId = _.get(responseData, 'id');
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
        result.isAdmin = ROLES.OWNER == _.get(responseData, 'role_by_current_user');

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
        result.placeAvailable = responseData.available_workingplace;
        result.totalPlace = responseData.total_workingplace;
        result.bookedPlace = responseData.booked_workingplace;
        return result;
    }
    parseWorkPlace(responseData: any): WorkPlace {
        const result = new WorkPlace();
        result.id = responseData.id;
        result.mapId = responseData.working_space_layout_id;
        result.name = responseData.label;
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
        result.code = responseData.code;
        return result;
    }
    parseBookingHistory(responseData: any): BookingHistory {
        const result = new BookingHistory();
        result.id = responseData.id;
        result.name = responseData.working_place.label;
        result.address = parseMapAddress(
            responseData.working_place.working_space_layout.street,
            responseData.working_place.working_space_layout.city,
            responseData.working_place.working_space_layout.state,
            responseData.working_place.working_space_layout.street.country,
        );
        result.timeFrom = responseData.from;
        result.timeTo = responseData.to;
        result.workspace = responseData.working_place.working_space_layout.name;
        result.placeId = responseData.working_place.id;
        result.mapId = responseData.working_place.working_space_layout.id;
        result.code = responseData.code;
        result.bookingStatus = responseData.working_place_booking_status_id;
        result.placeName = responseData.working_place.label;
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
        result.code = _.get(responseData, 'code');
        result.hubId = _.get(responseData, 'hub_id');
        result.layoutId = _.get(responseData, 'layout_id');
        result.faChannel = _.get(responseData, 'fa_channel');
        result.fdChannel = _.get(responseData, 'fd_channel');
        result.fromTime = _.get(responseData, 'from_time');
        result.toTime = _.get(responseData, 'to_time');
        result.isCheckin = _.get(responseData, 'is_checkin');
        result.image = _.get(responseData, 'image');
        return result;
    }
    parseNotificationData(remoteMessage: FirebaseMessagingTypes.RemoteMessage) {
        try {
            const notificationMessage: NotificationMessage = new NotificationMessage();
            const data = remoteMessage.data;
            if (data) {
                notificationMessage.userId = data.user_id ? data.user_id : '';
                notificationMessage.type = data.type ? data.type : '';
                notificationMessage.bookingId = data.booking_id ? parseInt(data.booking_id) : 0;
                notificationMessage.message = data.message ? data.message : '';
                notificationMessage.from = data.from ? new Date(data.from) : new Date();
                notificationMessage.to = data.from ? new Date(data.to) : new Date();
            } else {
                return undefined;
            }
            return notificationMessage;
        } catch (error) {
            return undefined;
        }
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
    parseNotificationData(remoteMessage: FirebaseMessagingTypes.RemoteMessage): NotificationMessage | undefined;
}

export const Parser = new ParserImpl();
