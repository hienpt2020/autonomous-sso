import Config from 'react-native-config';

const baseImageURl = Config.ENDPOINT_IMAGE;

export const getImage = (imageUrl: string): number | any => {
  return imageUrl ? { uri: baseImageURl + imageUrl } : require('src/assets/images/bg_empty.png');
};
