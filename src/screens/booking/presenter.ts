import { BookingData, Presenter } from './types';

export class PresenterImpl implements Presenter {
    fetchBooking(): BookingData[] {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        let result: BookingData[] = []
        for (let index = 0; index < 100; index++) {
            result.push(new BookingData(
                `${index}`,
                "Seat #1",
                "139, Hong Ha, Phu Nhuan",
                today.getTime(),
                tomorrow.getTime(),
                "Floor#3"
            ))

        }
        return result
    }
} 