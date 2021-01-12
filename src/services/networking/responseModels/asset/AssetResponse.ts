import { StockResponse } from '../stock/StockResponse';
import { AssetImageResponse } from './AssetImageResponse';
import { AssetTypeResponse } from './AssetTypeResponse';

export interface AssetResponse {
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
  assets_types: AssetTypeResponse;
  assets_images: AssetImageResponse[];
  assets_stock: StockResponse;
  in_stock: number;
  extra: string;
}
