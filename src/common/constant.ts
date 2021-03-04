import SvgDefaultDesk from 'src/assets/images/desk_default.svg';
export class Constant {
    public static DEFAULT_LANGUAGE = 'en';
}

export enum BookingStatus {
    AVAILABLE = 1,
    BOOKED = 2,
    CHECKED_IN = 3,
    CHECKED_OUT = 4,
    CANCEL = 5,
}

// TODO
export const DEFAULT_REQUEST_LIMIT = 100;

export const EMAIL_SUPPORT = 'hybrid-contact@autonomous.ai';

export const ALL_WORK_SPACE_HISTORY = -1;

export const FCM_TOPIC = 'booking_notication_user_id_';

export enum NotificationType {
    CHECK_IN = 'checkin',
    CHECK_OUT = 'checkout',
}

export enum ROLES {
    OWNER,
    ADMIN,
    MEMBER,
}

export const DEFAULT_IMAGES = {
    DEVICE: require('src/assets/images/desk_default.png'),
    EMPTY: require('src/assets/images/bg_empty.png'),
    PLACE: require('src/assets/images/image_place_placeholder.jpg'),
    LAYOUT: require('src/assets/images/image_layout_placeholder.jpg'),
    PLACE_THUMBNAIL: require('src/assets/images/image_place_thumbnail_placeholder.jpg'),
};

export enum DEVICE_TYPES {
    WORKSPACE = 'WORKSPACE',
    PERSONAL = 'PERSONAL',
}

export enum LOGIN_SOCIAL_TYPES {
    FACEBOOK = 0,
    GOOGLE = 1,
    APPLE = 2,
}

export enum UserAction {
    // AUTH
    AUTH_LOGIN_WITH_EMAIL_PASSWORD = 'AUTH_LOGIN_WITH_EMAIL_PASSWORD',
    AUTH_LOGIN_WITH_GOOGLE = 'AUTH_LOGIN_WITH_EMAIL_PASSWORD',
    AUTH_LOGIN_WITH_FACEBOOK = 'AUTH_LOGIN_WITH_EMAIL_PASSWORD',
    AUTH_LOGIN_WITH_APPLE = 'AUTH_LOGIN_WITH_EMAIL_PASSWORD',
    AUTH_REGISTER = 'AUTH_REGISTER',
    AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD',
    AUTH_LOGOUT = 'AUTH_LOGOUT',
    AUTH_JOIN_WORK_SPACE = 'AUTH_JOIN_WORK_SPACE',
    // BOOKING
    // PROFILE
    SETTING_CHANGE_PROFILE = 'SETTING_CHANGE_PROFILE',
    SETTING_FEEDBACK = 'SETTING_FEEDBACK',
    SETTING_PRIVACY = 'SETTING_PRIVACY',
    SETTING_ACTIVITY = 'SETTING_ACTIVITY',
    SETTING_TERM_OF_USE = 'SETTING_TERM_OF_USE',
    SETTING_CONTACT = 'SETTING_CONTACT',
    SETTING_CHANGE_WORK_SPACE = 'SETTING_CHANGE_WORK_SPACE',
    SETTING_CHANGE_PASSWORD = 'SETTING_CHANGE_PASSWORD',
}
