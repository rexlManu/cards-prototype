import { Bot } from "../bot";
import { SwordFighterCard } from "../../card/swordfighter";
import { Health, Stats } from "../../card/card";
import { Player } from "../../interfaces/player";
export class BotFaker {
  static create(): Player {
    var bot = new Bot((Math.random() * 10).toFixed(0));
    bot.inventory.cards.push(
      new SwordFighterCard("Kevin", new Stats(10, 5), new Health(10, 10, 1))
    );
    return bot;
  }
}
