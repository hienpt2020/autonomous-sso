import { WorkingPlaceResponse } from '../place/WorkingPlaceResponse';
export interface BookingResponse {
  id: number;
  from: string;
  to: string;
  working_place_id: number;
  working_place: WorkingPlaceResponse;
  created_at: string;
  created_by: string;
  user_id: number;
  working_place_booking_status_id: number;
  code: number;
}
