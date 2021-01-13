import Config from 'react-native-config';

const baseImageURl = Config.ENDPOINT_IMAGE;

export const getImage = (imageUrl: string) => {
  return imageUrl
    ? baseImageURl + imageUrl
    : 'https://i.pinimg.com/originals/1f/72/60/1f72605e4cf5921f4a3a063f4f56a306.jpg';
};
