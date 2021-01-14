import { StyleSheet } from 'react-native';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    flexGrow: 0,
  },
  chipContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexBasis: 1,
    marginStart: 8,
    marginTop: 4,
    marginBottom: 4,
    marginEnd: 8,
    borderColor: AppColor.PRIMARY,
    borderWidth: 1,
    borderRadius: 8,
  },

  chipContent: {
    flex: 1,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  chipIcon: {},
  chipMutableContainer: {
    height: 40,
    flexBasis: 1,
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: 8,
    marginTop: 4,
    marginBottom: 4,
    marginEnd: 8,
    backgroundColor: AppColor.PRIMARY,
    borderRadius: 8,
  },

  chipMutableContent: {
    color: AppColor.WHITE,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  chipMutableIcon: {},
});
