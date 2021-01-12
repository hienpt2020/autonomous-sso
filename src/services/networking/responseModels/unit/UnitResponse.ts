import { StockResponse } from '../stock/StockResponse';
import { UnitStatusResponse } from './UnitStatusResponse';

export interface UnitResponse {
  id: number;
  serial_number: string;
  private_key: string;
  description: string;
  assets_stock_id: number;
  assets_detail_status_id: number;
  assets_detail_status: UnitStatusResponse;
  working_place: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  assets_stock: StockResponse;
}
