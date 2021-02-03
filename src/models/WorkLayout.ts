export default class WorkLayout {
    id: number;
    name: string;
    address: string;
    image: string;
    policy: string;
    placeAvailable: number;
    totalPlace: number;
    bookedPlace: number;
    constructor() {
        this.id = 0;
        this.name = '';
        this.address = '';
        this.image = '';
        this.policy = '';
        this.placeAvailable = 0;
        this.totalPlace = 0;
        this.bookedPlace = 0;
    }
}
