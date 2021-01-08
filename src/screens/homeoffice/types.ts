import { PropsBase } from 'src/types/propsBase'
import { RouteName } from 'src/routers/routeName'
import { CardData } from './card'

export class SectionData {
    title: string
    data: CardData[]
    constructor(title: string, data: CardData[]) {
        this.title = title
        this.data = data
    }

}

export { CardData } from './card'
export interface Presenter {
    fetchFloor(): SectionData[]
}
export interface Props extends PropsBase<RouteName.HOME_OFFICE> { }

