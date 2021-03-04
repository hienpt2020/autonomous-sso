import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { User } from 'src/models';
import _ from 'lodash';
import WorkSpace from 'src/models/WorkSpace';
import { parseMapAddress } from './locationHelper';
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
    parseNotificationData(remoteMessage: FirebaseMessagingTypes.RemoteMessage): NotificationMessage | undefined;
}

export const Parser = new ParserImpl();
