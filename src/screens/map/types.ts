import { PropsBase } from 'src/types/propsBase';
import { RouteName } from 'src/routers/routeName';
import { CardData } from './card';
export { CardData } from './card';
export interface Presenter {
  fetchMap(floorId: string): CardData[];
  formatData(data: []): CardData[];
}
export interface Props extends PropsBase<RouteName.MAP> {}
