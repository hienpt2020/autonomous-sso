import WorkPlace from 'src/models/WorkPlace';
import { HybridApi } from 'src/services/networking';

export const getAllWorkPlace = async (workLayoutId: number): Promise<WorkPlace[]> => {
  try {
    const { data } = await HybridApi.getListWorkingPlaceById(workLayoutId);
    const workPLaces: WorkPlace[] = data.items.map((placeResponse: any) => new WorkPlace(placeResponse));
    return workPLaces;
  } catch (e) {
    return [];
  }
};

export const getAvailableWorkPlace = async (workLayoutId: number, from: string, to: string): Promise<WorkPlace[]> => {
  try {
    const { data } = await HybridApi.getListWorkingPlaceByDate(workLayoutId, from, to);
    const workPLaces: WorkPlace[] = data.items.map((placeResponse: any) => new WorkPlace(placeResponse));
    return workPLaces;
  } catch (e) {
    return [];
  }
};
