import { ParserImpl } from 'src/helpers/parser';
import { BookingHistory } from 'src/models/BookingHistory';
import { HybridApi } from 'src/services/networking';

export const getBookingHistory = async (isAdmin: boolean, workingSpaceId: number, page: number) => {
  try {
    const res: any = await HybridApi.getBookingHistory(isAdmin, workingSpaceId, page);

    const bookings = res.data.items;
    const bookingDatas = bookings.map((booking: any) => {
      const parser = new ParserImpl();
      return parser.parseBookingHistory(booking);
    });

    return bookingDatas;
  } catch (error) {
    return [];
  }
};
