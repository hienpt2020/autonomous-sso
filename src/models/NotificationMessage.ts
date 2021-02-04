export class NotificationMessage {
    type: string = 'checkin';
    userId: string = '';
    message: string = '';
    bookingId: number = 0;
    from: Date = new Date();
    to: Date = new Date();
}
