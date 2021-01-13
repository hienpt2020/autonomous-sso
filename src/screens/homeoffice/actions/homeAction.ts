import { HybridApi } from 'src/services/networking';
import WorkLayout from 'src/models/WorkLayout';

export const getWorkLayout = async (id: number): Promise<WorkLayout[]> => {
  try {
    const { data } = await HybridApi.getListWorkingLayout(id);
    return data.items;
  } catch (e) {
    return [];
  }
};
