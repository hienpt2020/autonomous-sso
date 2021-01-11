import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';

export default StyleSheet.create({
  popup: {
    position: 'absolute',
    flex: 1,
    backgroundColor: AppColor.ALPHA_40,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppColor.PRIMARY,

  },
  textButton: {
    color: AppColor.PRIMARY,

  },
  container: {
    backgroundColor: AppColor.WHITE,
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  button: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
});
