export enum SOCIAL_TYPES {
    GOOGLE = 'GOOGLE',
    FACEBOOK = 'FACEBOOK',
    APPLE = 'APPLE',
}

export interface ISocialFactory {
    configure(): void;
    login(type: string): Promise<any>;
    logout(): Promise<any>;
}

export interface IResponse {
    token: string;
    email: string;
    name: string;
    image: string;
    clientId: string;
}

export class Helper {
    public static parseResponseGoogle(response: any): IResponse {
        return {
            token: response.idToken,
            email: response.user?.email,
            name: response.user?.name,
            image: response.user?.photo,
            clientId: response.user?.id,
        };
    }
}
