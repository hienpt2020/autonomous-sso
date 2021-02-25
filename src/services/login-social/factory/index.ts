import { SOCIAL_TYPES } from './types';
import { Google } from './google';
import { Apple } from './apple';
import { Facebook } from './facebook';
class SocialFactory {
    create(type: string): Google | Apple | Facebook {
        switch (type) {
            case SOCIAL_TYPES.GOOGLE:
                return new Google();
            case SOCIAL_TYPES.APPLE:
                return new Apple();
            case SOCIAL_TYPES.FACEBOOK:
                return new Facebook();
            default:
                return new Google();
        }
    }
}

export default new SocialFactory();
