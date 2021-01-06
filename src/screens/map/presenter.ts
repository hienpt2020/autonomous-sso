import { CardData, Presenter } from './types';

export class PresenterImpl implements Presenter{
    fetchMap(): CardData[] {
        let result : CardData[] = []
        for (let index = 0; index < 100; index++) {
            result.push(new CardData('$i', "Seat #1", "139 Hong Ha, Phu Nhuan", "https://source.unsplash.com/wgivdx9dBdQ/1600x900"))
            
        }
        return result
    }

} 