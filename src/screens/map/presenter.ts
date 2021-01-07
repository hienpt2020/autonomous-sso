import { CardData, Presenter } from './types';

export class PresenterImpl implements Presenter{
    fetchMap(floorId: string): CardData[] {
        console.log("fetch map of floor ", floorId)
        let result : CardData[] = []
        for (let i = 0; i < 100; i++) {
            result.push(new CardData(`${i}`, "Seat #1", "139 Hong Ha, Phu Nhuan", "https://source.unsplash.com/wgivdx9dBdQ/1600x900"))
            
        }
        return result
    }

} 