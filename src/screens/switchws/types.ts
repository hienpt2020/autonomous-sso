import { PropsBase } from 'src/types/propsBase'
import { RouteName } from 'src/routers/routeName'
export class WorkSpaceData {
    id: string
    name: string
    workspace: string

    constructor(id: string, name: string, workspace: string) {
        this.id = id
        this.name = name
        this.workspace = workspace
    }

}
export interface Presenter {
    fetchWorkSpace(): WorkSpaceData[]
}
export interface Props extends PropsBase<RouteName.SWITCH_WORKSPACE> { }

