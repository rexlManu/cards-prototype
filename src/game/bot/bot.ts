import { Card } from "../card/card";
import { Inventory, Party, Player } from "../interfaces/player";

export class BotInventory implements Inventory {
  cards: Card[];
  size: number;

  constructor() {
    this.cards = [];
    this.size = 999;
  }
}

export class Bot implements Player {
  name: string;
  inventory: Inventory;
  parties: Party[];

  constructor(name: string) {
    this.name = "Bot-" + name;
    this.inventory = new BotInventory();
    this.parties = [];
  }
}
