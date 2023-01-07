import Bowman from "../Bowman";
import Swordsman from "../Swordsman";
import Magician from "../Magician";
import Daemon from "../Daemon";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("Character creation Bowman", () => {
  const result = new Bowman("Vasya");
  expect(result).toEqual({
    name: "Vasya",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("Character creation Daemon", () => {
  const result = new Daemon("Vasya");
  expect(result).toEqual({
    name: "Vasya",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("Character creation Magician", () => {
  const result = new Magician("Vasya");
  expect(result).toEqual({
    name: "Vasya",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("Character creation Undead", () => {
  const result = new Undead("Vasya");
  expect(result).toEqual({
    name: "Vasya",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("Character creation Swordsman", () => {
  const result = new Swordsman("Vasya");
  expect(result).toEqual({
    name: "Vasya",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("Character creation Zombie", () => {
  const result = new Zombie("Vasya");
  expect(result).toEqual({
    name: "Vasya",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
