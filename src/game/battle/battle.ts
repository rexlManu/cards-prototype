import { Card } from "../card/card";
import { Player } from "../interfaces/player";

export class Battle {
  boss: Card;
  players: Player[];

  constructor(boss: Card) {
    this.boss = boss;
    this.players = [];
  }
}
