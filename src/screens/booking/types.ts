import { PropsBase } from 'src/types/propsBase'
import { RouteName } from 'src/routers/routeName'
export class BookingData {
    id: string
    name: string
    address: string
    timeFrom: number
    timeTo: number
    workspace: string
    constructor(id: string, name: string, address: string, timeFrom: number, timeTo: number, workspace: string) {
        this.id = id
        this.name = name
        this.address = address
        this.timeFrom = timeFrom
        this.timeTo = timeTo
        this.workspace = workspace
    }

}
export interface Presenter {
    fetchBooking(): BookingData[]
}
export interface Props extends PropsBase<RouteName.MY_BOOKING> { }

