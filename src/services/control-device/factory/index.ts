import { API_CONTROLLER } from '../types';
import { ApiImp } from './api';

export class ControllerFactory {
    public static create(name: string) {
        switch (name) {
            case API_CONTROLLER:
                return new ApiImp();
            default:
                return new ApiImp();
        }
    }
}
