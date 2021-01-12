export class CardData {
  id: number;
  name: string;
  address: string;
  image: string;
  constructor(id: number, name: string, address: string, image: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.image = image;
  }
}
export interface Props {
  cardData: CardData;
  onPress?: () => void;
}
