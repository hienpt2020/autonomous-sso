import WorkPlace from 'src/models/WorkPlace';
import { HybridApi } from 'src/services/networking';
import { ParserImpl } from './../../../helpers/parser';

export const getAllWorkPlace = async (workLayoutId: number): Promise<WorkPlace[]> => {
    try {
        const { data } = await HybridApi.getListWorkingPlaceById(workLayoutId);
        const workPLaces: WorkPlace[] = data.items.map((placeResponse: any) => {
            const parser = new ParserImpl();
            return parser.parseWorkPlace(placeResponse);
        });
        return workPLaces;
    } catch (e) {
        return [];
    }
};

export const getAvailableWorkPlace = async (workLayoutId: number, from: string, to: string): Promise<WorkPlace[]> => {
    try {
        const { data } = await HybridApi.getListWorkingPlaceByDate(workLayoutId, from, to);
        const workPLaces: WorkPlace[] = data.items.map((placeResponse: any) => {
            const parser = new ParserImpl();
            return parser.parseWorkPlace(placeResponse);
        });
        return workPLaces;
    } catch (e) {
        return [];
    }
};

export const getBookingOfUser = async (form: string, to: string) => {
    try {
        const { data } = await HybridApi.getBookingHistory(false, null, 0, from, to);
        const workPLaces: WorkPlace[] = data.items.map((placeResponse: any) => {
            const parser = new ParserImpl();
            return parser.parseWorkPlace(placeResponse);
        });
        return workPLaces;
    } catch (e) {
        return [];
    }
};
