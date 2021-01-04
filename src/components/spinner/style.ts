import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: AppColor.ALPHA_40,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  spinner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: AppColor.ALPHA_40,
  },
});
