import { Card } from "../card/card";

export interface Player {
  name: string;
  inventory: Inventory;
  parties: Array<Party>;
}

export interface Inventory {
  cards: Array<Card>;
  size: number;
}

export interface Party {
  members: Array<Card>;
}
