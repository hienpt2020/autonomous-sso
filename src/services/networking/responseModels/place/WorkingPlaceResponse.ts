import { UnitResponse } from '../unit/UnitResponse';
import { AssetImageResponse } from '../asset/AssetImageResponse';
import { MapResponse } from '../map/MapResponse';
import PlaceTag from './PlaceTag';
export interface WorkingPlaceResponse {
  id: number;
  code: string;
  working_space_layout_id: number;
  working_place_types_id: number;
  working_space_layout: MapResponse;
  working_place_types: WorkingPlaceTypesResponse;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by?: null;
  deleted_at?: null;
  deleted_by?: null;
  working_p_lace_images?: AssetImageResponse[];
  working_place_tags?: PlaceTag[];
  working_place_bookings?: null;
  assets_details?: UnitResponse[];
}

export interface WorkingPlaceTypesResponse {
  id: number;
  type: string;
  type_name: string;
}
