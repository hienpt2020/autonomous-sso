import { PropsBase } from 'src/types/propsBase';
import { RouteName } from 'src/routers/routeName';
import { Booking } from 'src/services/networking/modal/booking/Booking';
import moment from 'moment';

export class BookingData {
  id: number;
  name: string;
  address: string;
  timeFrom: string;
  timeTo: string;
  workspace: string;

  constructor(booking: Booking) {
    this.id = booking.id;
    this.name = booking.working_place.working_place_types.type_name + ' ' + booking.working_place.code.toString();
    this.address = booking.working_place.working_space_layout.street;
    this.timeFrom = moment(booking.from).format('MM ddd, YYYY');
    this.timeTo = moment(booking.to).format('MM ddd, YYYY');
    this.workspace = booking.working_place.working_space_layout.name;
  }
}
export interface Presenter {
  fetchBooking(): BookingData[];
}
export interface Props extends PropsBase<RouteName.MY_BOOKING> {}
