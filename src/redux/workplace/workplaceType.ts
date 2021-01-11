export const WORKPLACE_GET_INFO_LAYOUT_START = 'WORKPLACE/GET_INFO_LAYOUT_START';
export const WORKPLACE_GET_INFO_LAYOUT_SUCCESS = 'WORKPLACE/GET_INFO_LAYOUT_SUCCESS';
export const WORKPLACE_GET_INFO_LAYOUT_FAILED = 'WORKPLACE/GET_INFO_LAYOUT_FAILED';

export const WORKPLACE_GET_INFO_FILTER_START = 'WORKPLACE/GET_INFO_FILTER_START';
export const WORKPLACE_GET_INFO_FILTER_SUCCESS = 'WORKPLACE/GET_INFO_FILTER_SUCCESS';
export const WORKPLACE_GET_INFO_FILTER_FAILED = 'WORKPLACE/GET_INFO_FILTER_FAILED';

export const WORKPLACE_GET_INFO_FILTER_BY_DATE_START = 'WORKPLACE/GET_INFO_FILTER_BY_DATE_START';
export const WORKPLACE_GET_INFO_FILTER_BY_DATE_SUCCESS = 'WORKPLACE/GET_INFO_FILTER_BY_DATE_SUCCESS';
export const WORKPLACE_GET_INFO_FILTER_BY_DATE_FAILED = 'WORKPLACE/GET_INFO_FILTER_BY_DATE_FAILED';

export interface IWorkplaceLayout {
  floorPlan?: [];
  address: string;
  city: string;
  country: string;
  createdAt: string;
  createdBy: string;
  description: string;
  extra: string;
  deletedAt: string;
  deletedBy: string;
  id: number;
  latitude: number;
  longtitude: number;
  name: string;
  postCode: string;
  state: string;
  street: string;
  updatedAt: string;
  updatedBy: string;
  workingPlaces: string;
  workingSpace: string;
  workingSpaceLayoutImages: [];
  zipCode: string;
}

interface IWorkingPlaceTypes {
  id: number;
  type: string;
  typeName: string;
  workingSpace: string;
}

export interface IWorkplaceFilter {
  assetsDetails: [];
  code: string;
  createdAt: string;
  createdBy: string;
  deletedAt: string;
  deleteBy: string;
  extra: string;
  id: number;
  updatedAt: string;
  updatedBy: string;
  workingPlaceImages: [];
  workingPlaceBookings: [];
  workingPlaceTags: [];
  workingPlaceTypes: IWorkingPlaceTypes;
  workingSpaceLayoutId: number;
  workingSpaceLayout?: IWorkplaceLayout;
}

export interface IWorkplaceLayoutsPayload {
  items?: IWorkplaceLayout[];
  limit?: number;
  nextPage?: number;
  offset?: number;
  page?: number;
  prevPage?: number;
  totalItem?: number;
  totalPage?: number;
  isLoading?: boolean;
}

export interface IWorkplaceFiltersPayload {
  items?: IWorkplaceFilter[];
  limit?: number;
  nextPage?: number;
  offset?: number;
  page?: number;
  prevPage?: number;
  totalItem?: number;
  totalPage?: number;
  isLoading?: boolean;
}

export interface IWorkplaceStateReducer {
  layout?: IWorkplaceLayoutsPayload;
  filter?: IWorkplaceFiltersPayload;
}
export interface IParamGetWorkplaceByDate {
  layoutId: number;
  from: string;
  to: string;
}
export interface IGetWorkplaceActionType {
  type:
    | typeof WORKPLACE_GET_INFO_LAYOUT_START
    | typeof WORKPLACE_GET_INFO_LAYOUT_SUCCESS
    | typeof WORKPLACE_GET_INFO_LAYOUT_FAILED
    | typeof WORKPLACE_GET_INFO_FILTER_START
    | typeof WORKPLACE_GET_INFO_FILTER_SUCCESS
    | typeof WORKPLACE_GET_INFO_FILTER_FAILED
    | typeof WORKPLACE_GET_INFO_FILTER_BY_DATE_START;
  payload?: IWorkplaceStateReducer | IParamGetWorkplaceByDate;
}

export const formatWorkplaceLayout = (data: any) => {
  if (typeof data !== 'object') {
    return {};
  }
  return {
    floorPlan: data.FloorPlan,
    address: data.address,
    city: data.city,
    country: data.country,
    createdAt: data.created_at,
    createdBy: data.created_by,
    description: data.description,
    extra: data.extra,
    deletedAt: data.deleted_at,
    deletedBy: data.deleted_by,
    id: data.id,
    latitude: data.latitude,
    longtitude: data.longtitude,
    name: data.name,
    postCode: data.post_code,
    state: data.state,
    street: data.street,
    updatedAt: data.updated_at,
    updatedBy: data.updated_by,
    workingPlaces: data.working_places,
    workingSpace: data.working_space,
    workingSpaceLayoutImages: data.working_space_layout_images,
    zipCode: data.zip_code,
  };
};

export const formatWorkplaceFilter = (data: any) => {
  if (typeof data !== 'object') {
    return {};
  }
  return {
    assetsDetails: data.assets_details,
    code: data.code,
    createdAt: data.created_at,
    createdBy: data.created_by,
    deletedAt: data.deleted_at,
    deleteBy: data.deleted_by,
    extra: data.extr,
    id: data.id,
    updatedAt: data.updated_at,
    updatedBy: data.updated_by,
    workingPlaceImages: data.working_p_lace_images,
    workingPlaceBookings: data.working_place_bookings,
    workingPlaceTags: data.working_place_tags,
    workingPlaceTypes: data.working_place_types,
    workingSpaceLayoutId: data.working_place_types_id,
    workingSpaceLayout: formatWorkplaceLayout(data.working_space_layout),
  };
};
