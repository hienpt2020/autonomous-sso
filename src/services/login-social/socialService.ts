import { ISocialService } from './types';
import SocialFactory from './factory';
import { SOCIAL_TYPES } from './factory/types';
import { Google } from './factory/google';
import { Log } from 'src/helpers/logger';

class SocialServiceBase implements ISocialService {
    private google: undefined | Google = SocialFactory.create(SOCIAL_TYPES.GOOGLE);
    public configure() {
        try {
            this.google?.configure();
        } catch (e) {
            Log.error('Error configure google:' + e);
        }
    }
    async loginGoogle(): Promise<any> {
        try {
            let data = await this.google?.login();
            return Promise.resolve(data);
        } catch (e) {
            Log.error('Error login google:' + e);
        }
    }

    async loginFacebook(): Promise<any> {}
    async loginApple(): Promise<any> {}
}

export const SocialService: ISocialService = new SocialServiceBase();
