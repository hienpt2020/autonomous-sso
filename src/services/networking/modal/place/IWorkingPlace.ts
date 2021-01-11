import { Unit } from '../unit/Unit';
import { AssetImage } from '../asset/AssetImage';
import { Map } from '../map/Map';
import PlaceTag from './PlaceTag';
export interface IWorkingPlace {
  id: number;
  code: string;
  working_space_layout_id: number;
  working_place_types_id: number;
  working_space_layout: Map;
  working_place_types: WorkingPlaceTypes;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by?: null;
  deleted_at?: null;
  deleted_by?: null;
  working_p_lace_images?: AssetImage[];
  working_place_tags?: PlaceTag[];
  working_place_bookings?: null;
  assets_details?: Unit[];
}

export interface WorkingPlaceTypes {
  id: number;
  type: string;
  type_name: string;
}
