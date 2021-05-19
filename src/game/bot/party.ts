import { Card } from "../card/card";
import { Party } from "../interfaces/player";

export class CardParty implements Party {
  members: Card[];
  constructor() {
    this.members = [];
  }
}
