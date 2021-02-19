import { ISocialService } from './types';
import SocialFactory from './factory';
import { SOCIAL_TYPES } from './factory/types';
import { Log } from 'src/helpers/logger';
import { LOGIN_SOCIAL_TYPES } from 'src/common/constant';

class SocialServiceBase implements ISocialService {
    public configure() {
        try {
            let google = SocialFactory.create(SOCIAL_TYPES.GOOGLE);
            google.configure();
        } catch (e) {
            Log.error('Error configure google:' + e);
        }
    }

    public async login(type: number): Promise<any> {
        try {
            switch (type) {
                case LOGIN_SOCIAL_TYPES.GOOGLE:
                    let google = SocialFactory.create(SOCIAL_TYPES.GOOGLE);
                    let data = await google.login();
                    return Promise.resolve(data);
                case LOGIN_SOCIAL_TYPES.FACEBOOK:
                    return Promise.resolve('FACEBOOK');
                case LOGIN_SOCIAL_TYPES.APPLE:
                    return Promise.resolve('APPLE');
            }
        } catch (e) {
            console.log(`User login ${LOGIN_SOCIAL_TYPES[type]} failed:` + e);
        }
    }
}

export const SocialService: ISocialService = new SocialServiceBase();
