import SvgDefaultDesk from 'src/assets/images/desk_default.svg';
export class Constant {
    public static DEFAULT_LANGUAGE = 'en';
}

export enum BookingStatus {
    AVAILABLE = 1,
    BOOKED = 2,
    COMFIRMED = 3,
    CHECKED_IN = 4,
    CANCEL = 5,
}

// TODO
export const DEFAULT_REQUEST_LIMIT = 100;

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
