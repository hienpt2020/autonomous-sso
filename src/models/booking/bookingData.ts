import { BookingResponse } from 'src/services/networking/responseModels/booking/BookingResponse';
import moment from 'moment';
import AssetData from '../asset/assetData';

export class BookingData {
  id: number;
  name: string;
  address: string;
  timeFrom: string;
  timeTo: string;
  workspace: string;
  mapId: number;
  placeId: number;
  code: number;

  constructor(booking: BookingResponse) {
    this.id = booking.id;
    this.name = booking.working_place.working_place_types.type_name + ' ' + booking.working_place.code.toString();
    this.address = booking.working_place.working_space_layout.street;
    this.timeFrom = moment(booking.from).format('MM ddd, YYYY');
    this.timeTo = moment(booking.to).format('MM ddd, YYYY');
    this.workspace = booking.working_place.working_space_layout.name;

    this.placeId = booking.working_place.id;
    this.mapId = booking.working_place.working_space_layout.id;
    this.code = booking.code;
  }
}
