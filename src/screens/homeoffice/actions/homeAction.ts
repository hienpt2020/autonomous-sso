import { HybridApi } from 'src/services/networking';
import WorkLayout from 'src/models/WorkLayout';

export const getWorkLayout = async (id: number): Promise<WorkLayout[]> => {
  try {
    const { data } = await HybridApi.getListWorkingLayout(id);

    return data.items.map(
      (item: any) =>
        new WorkLayout(
          item.id,
          item.name,
          item.street,
          item.working_space_layout_images && item.working_space_layout_images.length > 0
            ? item.working_space_layout_images[0].image_url
            : '',
        ),
    );
  } catch (e) {
    return [];
  }
};
