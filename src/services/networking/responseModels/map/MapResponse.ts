import { AssetImageResponse } from '../asset/AssetImageResponse';
export interface MapResponse {
  map: any;
  id: number;
  name: string;
  working_space: string;
  floor_plan: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  deleted_at: string;
  deleted_by: string;
  working_places: string;
  working_space_layout_images: AssetImageResponse[];
  extra: string;
  street: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  longtitude: number;
  latitude: number;
  description: string;
}
