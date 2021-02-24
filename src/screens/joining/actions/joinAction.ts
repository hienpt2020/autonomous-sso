import { SSOApi } from 'src/services/networking';

export async function joinWorkSpaceAction(token: string) {
    try {
        const response = await SSOApi.joinWorkSpace(token);
        return response.data;
    } catch (error) {
        return undefined;
    }
}
