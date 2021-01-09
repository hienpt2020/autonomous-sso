import {
  IGetWorkplaceActionType,
  IWorkplace,
  WORKPLACE_GET_INFO_START,
  WORKPLACE_GET_INFO_SUCCESS,
} from './workplaceType';

export const getWorkplaceLayoutStartAction = (): IGetWorkplaceActionType => {
  return {
    type: WORKPLACE_GET_INFO_START,
  };
};

export const getWorkplaceLayoutSuccessAction = (data: any): IGetWorkplaceActionType => {
  return {
    type: WORKPLACE_GET_INFO_SUCCESS,
    payload: {
      items: data.items.map(
        (item: any): IWorkplace => ({
          floorPlan: item.FloorPlan,
          address: item.address,
          city: item.city,
          country: item.country,
          createdAt: item.created_at,
          createdBy: item.created_by,
          description: item.description,
          extra: item.extra,
          deletedAt: item.deleted_at,
          deletedBy: item.deleted_by,
          id: item.id,
          latitude: item.latitude,
          longtitude: item.longtitude,
          name: item.name,
          postCode: item.post_code,
          state: item.state,
          street: item.street,
          updatedAt: item.updated_at,
          updatedBy: item.updated_by,
          workingPlaces: item.working_places,
          workingSpace: item.working_space,
          workingSpaceLayoutImages: item.working_space_layout_images,
          zipCode: item.zip_code,
        }),
      ),
      limit: data.limit,
      nextPage: data.next_page,
      offset: data.offset,
      page: data.page,
      prevPage: data.prev_page,
      totalItem: data.total_item,
      totalPage: data.total_page,
    },
  };
};

export type WorkplaceAction = IGetWorkplaceActionType;
