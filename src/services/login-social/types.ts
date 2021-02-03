export interface ISocialService {
    configure(): void;
    loginGoogle(): Promise<any>;
    loginFacebook(): Promise<any>;
    loginApple(): Promise<any>;
}
