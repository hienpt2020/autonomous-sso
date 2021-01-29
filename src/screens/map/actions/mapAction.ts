import { ALL_WORK_SPACE_HISTORY } from 'src/common/constant';
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

export const getBookingOfUser = async (from: string, to: string) => {
    try {
        const res: any = await HybridApi.getBookingHistory({
            isAdmin: false,
            workingSpaceId: ALL_WORK_SPACE_HISTORY,
            page: 0,
            from: from,
            to: to,
        });

        const bookings = res.data.items;
        const bookingDatas = bookings.map((booking: any) => {
            const parser = new ParserImpl();
            return parser.parseBookingHistory(booking);
        });
        return bookingDatas;
    } catch (e) {
        return [];
    }
};
