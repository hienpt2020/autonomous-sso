export interface ISocialService {
    configure(): void;
    login(type: number): Promise<any>;
}
