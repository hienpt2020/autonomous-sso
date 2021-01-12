export interface BaseListResponse<T> {
  items: T;
  limit: number;
  next_page: number;
  offset: number;
  page: number;
  prev_page: number;
  total_item: number;
  total_page: number;
}

export interface BaseResponse<T> {
  code: number;
  data: T;
  message: string;
}
