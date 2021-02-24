import { SOCIAL_TYPES } from './types';
import { Google } from './google';
import { Apple } from './apple';

class SocialFactory {
    create(type: string): Google {
        switch (type) {
            case SOCIAL_TYPES.GOOGLE:
                return new Google();
            case SOCIAL_TYPES.APPLE:
                return new Apple();
            default:
                return new Google();
        }
    }
}

export default new SocialFactory();
