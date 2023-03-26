import { ICardComponent } from "./icard-component";

export class Card implements ICardComponent {
  constructor(
    public name: string,
    public attack: number,
    public defense: number
  ) {}

  add(component: ICardComponent): void {
    throw new Error("Method not implemented.");
  }
  remove(component: ICardComponent): void {
    throw new Error("Method not implemented.");
  }
  get(index: number): ICardComponent {
    throw new Error("Method not implemented.");
  }
  display(): string {
    return `${this.name}: ${this.attack} / ${this.defense}`;
  }
}
