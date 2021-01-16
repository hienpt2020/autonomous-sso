export default class WorkLayout {
  id: number;
  name: string;
  address: string;
  image: string;
  policy: string;

  constructor(id: number, name: string, address: string, image: string, policy: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.image = image;
    this.policy = policy;
  }
}
