import reactotron from 'src/config/configReactoron';
import { HybridApi } from 'src/services/networking';
import WorkLayout from 'src/models/WorkLayout';
import { times } from 'lodash';
import { parseMapAddress } from 'src/helpers/locationHelper';

export const getWorkLayout = async (id: number): Promise<WorkLayout[]> => {
  try {
    const { data } = await HybridApi.getListWorkingLayout(id);

    return data.items.map((item: any) => {
      const extra = JSON.parse(item.extra);
      reactotron.log(extra);
      const policy = extra && extra.policies ? extra.policies : '';

      const address = parseMapAddress(item.street, item.city, item.state, item.country);

      return new WorkLayout(
        item.id,
        item.name,
        address,
        item.working_space_layout_images && item.working_space_layout_images.length > 0
          ? item.working_space_layout_images[0].image_url
          : '',
        policy,
      );
    });
  } catch (e) {
    return [];
  }
};
