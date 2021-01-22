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

export enum ROLES {
    OWNER,
    ADMIN,
    MEMBER,
}

export const DEFAULT_IMAGES = {
    DEVICE: 'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
};
