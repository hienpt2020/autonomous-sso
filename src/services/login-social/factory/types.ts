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
    accessToken: string;
    email: string;
    name: string;
    image: string;
    clientId: string;
}

export class Helper {
    public static parseResponseGoogle(response: any): IResponse {
        return {
            accessToken: response.idToken,
            email: response.user?.email,
            name: response.user?.name,
            image: response.user?.photo,
            clientId: response.user?.id,
        };
    }

    public static parseResponseAppleAuth(response: any): IResponse {
        return {
            accessToken: response.authorizationCode || response.code, // authorizationCode for IOS, code for android
            email: response?.email || '',
            name: response.fullName?.givenName + response.fullName?.familyName || '',
            image: '',
            clientId: response.user,
        };
    }

    public static parseResponseFacebook(response: any): IResponse {
        return {
            accessToken: response.token,
            email: '',
            name: '',
            image: '',
            clientId: '',
        };
    }
}
