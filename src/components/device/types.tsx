import { ViewStyle } from 'react-native';
import AssetData from 'src/models/asset/assetData';
export interface Props {
  data: AssetData[];
  containerStyle?: ViewStyle;
}
