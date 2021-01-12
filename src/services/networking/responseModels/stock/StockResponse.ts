import { AssetResponse } from '../asset/AssetResponse';

export interface StockResponse {
  id: number;
  quantity: number;
  inventory: number;
  assets_id: number;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  deleted_at: string;
  deleted_by: string;
  assets: AssetResponse;
}
