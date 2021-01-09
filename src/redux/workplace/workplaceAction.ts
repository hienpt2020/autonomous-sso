import { GET_WORKING_PLACES_START } from './workingPlaceType';

export interface IGetWorkingPlaceAction {
  type: typeof GET_WORKING_PLACES_START;
}

export type WorkingPlaceAction = IGetWorkingPlaceAction;
