import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.WHITE,
    justifyContent: 'center',
  },
  wrap: {
    margin: 16
  },
  term: {
    flexShrink: 1,
    padding: 16, 
    fontSize: 17
  },
  link: {
    flexShrink: 1,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  button: {
    marginStart: 16,
    marginBottom: 32,
    marginEnd: 16,
    backgroundColor: "#f00",
  }
});
