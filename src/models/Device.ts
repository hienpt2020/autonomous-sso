export default class Device {
    id: number;
    hubId: string;
    workingLayoutId: string;
    image: string;
    name: string;
    constructor(id: number, hubId: string, name: string, workingLayoutId: string, image: string) {
        this.id = id;
        this.hubId = hubId;
        this.workingLayoutId = workingLayoutId;
        this.image = image;
        this.name = name;
    }
}
