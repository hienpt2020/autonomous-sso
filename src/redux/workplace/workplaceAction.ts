import {
  formatWorkplaceFilter,
  formatWorkplaceLayout,
  IGetWorkplaceActionType,
  IParamGetWorkplaceLayout,
  WORKPLACE_GET_INFO_FILTER_BY_DATE_START,
  WORKPLACE_GET_INFO_FILTER_START,
  WORKPLACE_GET_INFO_FILTER_SUCCESS,
  WORKPLACE_GET_INFO_LAYOUT_START,
  WORKPLACE_GET_INFO_LAYOUT_SUCCESS,
} from './workplaceType';

export const getWorkplaceLayoutStartAction = (id: number): IParamGetWorkplaceLayout => {
  return {
    type: WORKPLACE_GET_INFO_LAYOUT_START,
    payload: { id },
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

export const getWorkplaceFilterByDateStartAction = (
  layoutId: number,
  from: string,
  to: string,
): IGetWorkplaceActionType => {
  return {
    type: WORKPLACE_GET_INFO_FILTER_BY_DATE_START,
    payload: { layoutId, from, to },
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
