export default class Booking {
    from: Date;
    to: Date;
    code: string;
    constructor(from: Date, to: Date, code: string) {
        this.from = from;
        this.to = to;
        this.code = code;
    }
}
