import Config from 'react-native-config';
import { DEFAULT_IMAGES } from 'src/common/constant';

const baseImageURl = Config.ENDPOINT_IMAGE;

export const getImage = (imageUrl: string, defaultImage: string = DEFAULT_IMAGES.EMPTY): number | any => {
    return imageUrl ? { uri: baseImageURl + imageUrl } : defaultImage;
};
