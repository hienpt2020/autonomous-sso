import WorkLayout from 'src/models/WorkLayout';
import { HybridApi } from 'src/services/networking';
import { ParserImpl } from './../../../helpers/parser';

export const getWorkLayout = async (id: number): Promise<WorkLayout[]> => {
    try {
        const { data } = await HybridApi.getListWorkingLayout(id);

        return data.items.map((item: any) => {
            const parser = new ParserImpl();
            return parser.parseWorkLayout(item);
        });
    } catch (e) {
        return [];
    }
};
