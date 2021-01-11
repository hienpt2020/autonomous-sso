export interface BaseListResponseData<T> {
  items: T;
  limit: number;
  next_page: number;
  offset: number;
  page: number;
  prev_page: number;
  total_item: number;
  total_page: number;
}

export interface BaseListResponse<T> {
  code: number;
  data: BaseListResponseData<T>;
  message: string;
}
