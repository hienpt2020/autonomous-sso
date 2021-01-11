import { IWorkingPlace } from '../place/IWorkingPlace';
export interface Booking {
  id: number;
  from: string;
  to: string;
  working_place_id: number;
  working_place: IWorkingPlace;
  created_at: string;
  created_by: string;
  user_id: number;
  working_place_booking_status_id: number;
}
