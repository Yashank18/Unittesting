// character.ts

export class Character {
  name: string;
  position: { x: number; y: number };
  health: number;
  ammo: number;

  constructor(name: string) {
    this.name = name;
    this.position = { x: 0, y: 0 };
    this.health = 100;
    this.ammo = 10;
  }

  move(direction: string, distance: number): void {
    switch (direction.toLowerCase()) {
      case 'up':
        this.position.y += distance;
        break;
      case 'down':
        this.position.y -= distance;
        break;
      case 'left':
        this.position.x -= distance;
        break;
      case 'right':
        this.position.x += distance;
        break;
      default:
        throw new Error('Invalid direction');
    }
  }

  shoot(): string {
    if (this.ammo <= 0) {
      throw new Error('Out of ammo!');
    }
    this.ammo -= 1;
    return 'Shot fired!';
  }

  takeDamage(amount: number): void {
    this.health = Math.max(this.health - amount, 0);
  }

  heal(amount: number): void {
    this.health = Math.min(this.health + amount, 100);
  }
}