import { SSOApi } from 'src/services/networking';
export async function checkExistingEmailByToken(token: string) {
    try {
        return await SSOApi.checkExistingEmailByToken(token);
    } catch (error) {
        return undefined;
    }
}
