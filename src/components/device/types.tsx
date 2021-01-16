import { ViewStyle } from 'react-native';
import Asset from 'src/models/Asset';
export interface Props {
  data: Asset[];
  containerStyle?: ViewStyle;
  isConfig?: boolean;
  onPressDevice?: (item: Asset) => void;
}
