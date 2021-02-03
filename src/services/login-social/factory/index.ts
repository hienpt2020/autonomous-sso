import { SOCIAL_TYPES } from './types';
import { Google } from './google';

class SocialFactory {
    create(type: string) {
        switch (type) {
            case SOCIAL_TYPES.GOOGLE:
                return new Google();
        }
    }
}

export default new SocialFactory();
