export enum Role {
  HEALER,
  SWORDFIGHTER,
  SHIELD,
  BOWSHOOTER,
  MAGE,
}

export class Health {
  private current: number;
  private maximum: number;
  private growth: number;

  constructor($current: number, $maximum: number, $growth: number) {
    this.current = $current;
    this.maximum = $maximum;
    this.growth = $growth;
  }
}

export class Stats {
  private attack: number;
  private defensive: number;

  constructor(attack: number, defensive: number) {
    this.attack = attack;
    this.defensive = defensive;
  }
}

export interface Card {
  name: string;
  stats: Stats;
  health: Health;
  role: Role;
}
