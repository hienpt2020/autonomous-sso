import { parseMapAddress } from './../helpers/locationHelper';
import Asset from './Asset';

export default class WorkPlace {
    id: number;
    mapId: number;
    name: string;
    address: string;
    devices: Asset[];
    tags: string[];
    imageUrls: string[];
    thumbImageUrl: string;
    code: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.mapId = 0;
        this.address = '';
        this.devices = [];
        this.imageUrls = [];
        this.thumbImageUrl = '';
        this.tags = [];
        this.code = '';
    }
}
