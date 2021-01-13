import { BookingHistory } from 'src/models/BookingHistory';
import { HybridApi } from 'src/services/networking';

export const getBookingHistory = async (isAdmin: boolean, workingSpaceId: number, page: number) => {
  try {
    const res: any = await HybridApi.getBookingHistory(isAdmin, workingSpaceId, page);

    const bookings = res.data.items;
    const bookingDatas = bookings.map((booking: any) => new BookingHistory(booking));

    return bookingDatas;
  } catch (error) {
    return [];
  }
};
