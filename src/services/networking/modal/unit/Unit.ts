import { Stock } from '../stock/Stock';
import { UnitStatus } from './UnitStatus';

export interface Unit {
  id: number;
  serial_number: string;
  private_key: string;
  description: string;
  assets_stock_id: number;
  assets_detail_status_id: number;
  assets_detail_status: UnitStatus;
  working_place: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  assets_stock: Stock;
}
