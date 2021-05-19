import { Card, Health, Role, Stats } from "./card";
export class SwordFighterCard implements Card {
  name: string;
  stats: Stats;
  health: Health;
  role: Role;

  constructor(name: string, stats: Stats, health: Health) {
    this.name = name;
    this.stats = stats;
    this.health = health;
    this.role = Role.SWORDFIGHTER;
  }
}
