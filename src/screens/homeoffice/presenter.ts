import { SectionData, CardData, Presenter } from './types';

export class PresenterImpl implements Presenter{
    fetchFloor(): SectionData[] {
        let result : SectionData[] = []
        for (let i = 0; i < 10; i++) {
            result.push(new SectionData("Autonomous", this.fakeFloor()))
        }
        return result
    }

    fakeFloor(): CardData[] {
        let result: CardData[] = []
        for (let i = 0; i < 10; i++) {
            result.push(new CardData(`${i}`, "Floor 1", "139 Hong Ha, Phu Nhuan", "https://source.unsplash.com/wgivdx9dBdQ/1600x900"))
        }
        return result
    }

} 