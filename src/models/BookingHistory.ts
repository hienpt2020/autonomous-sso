import moment from 'moment';
import { parseMapAddress } from 'src/helpers/locationHelper';

export class BookingHistory {
  id: number;
  name: string;
  address: string;
  timeFrom: string;
  timeTo: string;
  workspace: string;
  mapId: number;
  placeId: number;
  code: number;

  constructor(booking: any) {
    this.id = booking.id;
    this.name = booking.working_place.working_place_types.type_name + ' ' + booking.working_place.code.toString();
    this.address = parseMapAddress(
      booking.working_place.working_space_layout.street,
      booking.working_place.working_space_layout.city,
      booking.working_place.working_space_layout.state,
      booking.working_place.working_space_layout.street.country,
    );
    this.timeFrom = moment(booking.from).format('DD MMM, YYYY');
    this.timeTo = moment(booking.to).format('DD MMM, YYYY');
    this.workspace = booking.working_place.working_space_layout.name;
    this.placeId = booking.working_place.id;
    this.mapId = booking.working_place.working_space_layout.id;
    this.code = booking.code;
  }
}
