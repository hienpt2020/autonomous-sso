import { StyleSheet } from 'react-native';
import { AppFontSize, AppSpacing } from 'src/styles';
import { AppColor } from 'src/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.GREY_4,
    justifyContent: 'center',
  },
  title: {
    marginTop: 96,
    marginStart: AppSpacing.LARGE, marginEnd: AppSpacing.LARGE,
    fontSize: 28
  },
  link: {
    flexShrink: 1,

  },
  input: {
    marginStart: AppSpacing.LARGE,
    marginEnd: AppSpacing.LARGE,
    color: AppColor.DARK_GREY_1,

  },
  button: {
    marginStart: AppSpacing.LARGE,
    marginEnd: AppSpacing.LARGE,
  },
  error: {
    color: AppColor.RED_7,
    marginStart: AppSpacing.LARGE,
    marginEnd: AppSpacing.LARGE,
    fontSize: AppFontSize.SIZE_12,
    marginTop: AppSpacing.TINY,
    marginBottom: AppSpacing.TINY,
  }
});
