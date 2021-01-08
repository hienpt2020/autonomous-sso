import { WorkSpaceData, Presenter } from './types';

export class PresenterImpl implements Presenter {
    fetchWorkSpace(): WorkSpaceData[] {
        let result: WorkSpaceData[] = []
        for (let index = 0; index < 100; index++) {
            result.push(new WorkSpaceData(
                `${index}`,
                "Autonomous",
                "Autonomous"
            ))

        }
        return result
    }
} 