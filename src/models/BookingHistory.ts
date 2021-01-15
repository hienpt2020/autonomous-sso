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

  constructor() {
    this.id = 0;
    this.name = '';
    this.address = '';
    this.timeFrom = '';
    this.timeTo = '';
    this.workspace = '';
    this.placeId = 0;
    this.mapId = 0;
    this.code = 0;
  }
}
