import {
  formatWorkplaceFilter,
  formatWorkplaceLayout,
  IGetWorkplaceActionType,
  WORKPLACE_GET_INFO_FILTER_START,
  WORKPLACE_GET_INFO_FILTER_SUCCESS,
  WORKPLACE_GET_INFO_LAYOUT_START,
  WORKPLACE_GET_INFO_LAYOUT_SUCCESS,
} from './workplaceType';

export const getWorkplaceLayoutStartAction = (): IGetWorkplaceActionType => {
  return {
    type: WORKPLACE_GET_INFO_LAYOUT_START,
  };
};

export const getWorkplaceLayoutSuccessAction = (data: any): IGetWorkplaceActionType => {
  return {
    type: WORKPLACE_GET_INFO_LAYOUT_SUCCESS,
    payload: {
      layout: {
        items: data.items.map((item: any) => formatWorkplaceLayout(item)),
        limit: data.limit,
        nextPage: data.next_page,
        offset: data.offset,
        page: data.page,
        prevPage: data.prev_page,
        totalItem: data.total_item,
        totalPage: data.total_page,
        isLoading: false,
      },
    },
  };
};

export const getWorkplaceFilterByIdStartAction = (layoutId: number): IGetWorkplaceActionType => {
  return {
    type: WORKPLACE_GET_INFO_FILTER_START,
    payload: {
      layoutId,
    },
  };
};

export const getWorkplaceFilterByIdSuccessAction = (data: any): IGetWorkplaceActionType => {
  return {
    type: WORKPLACE_GET_INFO_FILTER_SUCCESS,
    payload: {
      filter: {
        items: data.items.map((item: any) => formatWorkplaceFilter(item)),
        limit: data.limit,
        nextPage: data.next_page,
        offset: data.offset,
        page: data.page,
        prevPage: data.prev_page,
        totalItem: data.total_item,
        totalPage: data.total_page,
        isLoading: false,
      },
    },
  };
};

export type WorkplaceAction = IGetWorkplaceActionType;
