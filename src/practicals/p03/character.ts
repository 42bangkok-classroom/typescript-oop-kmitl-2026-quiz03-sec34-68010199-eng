export class Character {
  protected name: string;
  protected health: number;

  constructor(name: string, health: number = 100) {
    this.name = name;
    this.health = health;
  }

  public getName(): string {
    return this.name;
  }

  public getHealth(): number {
    return this.health;
  }

  public receiveDamage(damage: number): void {
    this.health -= damage;
  }
}