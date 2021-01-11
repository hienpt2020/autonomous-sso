import { AssetImage } from '../asset/AssetImage';
export interface Map {
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
  working_space_layout_images: AssetImage[];
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
