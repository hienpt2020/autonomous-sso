import { SOCIAL_TYPES } from './types';
import { Google } from './google';

class SocialFactory {
    create(type: string): Google {
        switch (type) {
            case SOCIAL_TYPES.GOOGLE:
                return new Google();
            default:
                return new Google();
        }
    }
}

export default new SocialFactory();
