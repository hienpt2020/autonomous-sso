export const WORKPLACE_GET_INFO_START = 'WORKPLACE/GET_INFO_START';
export const WORKPLACE_GET_INFO_SUCCESS = 'WORKPLACE/GET_INFO_SUCCESS';
export const WORKPLACE_GET_INFO_FAILED = 'WORKPLACE/GET_INFO_FAILED';

export interface IWorkplace {
  floorPlan: [];
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

export interface IWorkplaces {
  items: IWorkplace[];
  limit: number;
  nextPage: number;
  offset: number;
  page: number;
  prevPage: number;
  totalItem: number;
  totalPage: number;
}

export interface IWorkplacePayload extends IWorkplaces {
  fnFailed?: () => void;
  fnSuccess?: () => void;
}

export interface IGetWorkplaceActionType {
  type: typeof WORKPLACE_GET_INFO_START | typeof WORKPLACE_GET_INFO_SUCCESS | typeof WORKPLACE_GET_INFO_FAILED;
  payload?: IWorkplacePayload;
}
