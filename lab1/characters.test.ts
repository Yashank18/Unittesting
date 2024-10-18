// character.test.ts

import { Character } from './character';

describe('Character Class', () => {
  let character: Character;

  beforeEach(() => {
    character = new Character('Sam');
  });

  describe('move method', () => {
    test('should move up', () => {
      character.move('up', 10);
      expect(character.position).toEqual({ x: 0, y: 10 });
    });

    test('should move down', () => {
      character.move('down', 5);
      expect(character.position).toEqual({ x: 0, y: -5 });
    });

    test('should move left', () => {
      character.move('left', 7);
      expect(character.position).toEqual({ x: -7, y: 0 });
    });

    test('should move right', () => {
      character.move('right', 3);
      expect(character.position).toEqual({ x: 3, y: 0 });
    });

    test('should throw error on invalid direction', () => {
      expect(() => character.move('forward', 10)).toThrow('Invalid direction');
    });
  });

  describe('shoot method', () => {
    test('should reduce ammo by 1 when shooting', () => {
      character.shoot();
      expect(character.ammo).toBe(9);
    });

    test('should return "Shot fired!" when ammo is available', () => {
      const message = character.shoot();
      expect(message).toBe('Shot fired!');
    });

    test('should throw error when ammo is 0', () => {
      character.ammo = 0;
      expect(() => character.shoot()).toThrow('Out of ammo!');
    });
  });

  describe('takeDamage method', () => {
    test('should reduce health by damage amount', () => {
      character.takeDamage(30);
      expect(character.health).toBe(70);
    });

    test('health should not fall below 0', () => {
      character.takeDamage(150);
      expect(character.health).toBe(0);
    });
  });

  describe('heal method', () => {
    test('should increase health by heal amount', () => {
      character.takeDamage(50);
      character.heal(30);
      expect(character.health).toBe(80);
    });

    test('health should not exceed 100', () => {
      character.heal(50);
      expect(character.health).toBe(100);
    });
  });
});
