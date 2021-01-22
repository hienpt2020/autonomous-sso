import { useTranslation } from 'react-i18next';
import { BookingStatus } from 'src/common/constant';

export class BookingHistory {
    id: number;
    name: string;
    address: string;
    timeFrom: Date;
    timeTo: Date;
    workspace: string;
    mapId: number;
    placeId: number;
    code: number;
    bookingStatus: number;
    bookingStatusName: string;
    placeName: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.address = '';
        this.timeFrom = new Date();
        this.timeTo = new Date();
        this.workspace = '';
        this.placeId = 0;
        this.mapId = 0;
        this.code = 0;
        this.bookingStatus = BookingStatus.COMFIRMED;
        this.bookingStatusName = '';
        this.placeName = '';
    }

    isUpcoming(bookingStatus: number) {
        return bookingStatus == BookingStatus.BOOKED || bookingStatus == BookingStatus.COMFIRMED;
    }
}
