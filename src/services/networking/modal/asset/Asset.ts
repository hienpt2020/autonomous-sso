import { Stock } from '../stock/Stock';
import { AssetImage } from './AssetImage';
import { AssetType } from './AssetType';

export interface Asset {
  id: number;
  note: string;
  name: string;
  description: string;
  sku: string;
  assets_types_id: number;
  advance_features: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    additionalProp1: {};
  };
  created_by: string;
  updated_by: string;
  working_space: string;
  assets_stocks: number;
  assets_types: AssetType;
  assets_images: AssetImage[];
  assets_stock: Stock;
  in_stock: number;
}
