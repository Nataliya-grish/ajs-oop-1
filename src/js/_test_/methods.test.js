import Bowman from "../Bowman";

test("Method check levelUp", () => {
  const result = new Bowman("Vasya");
  result.levelUp();
  expect(result).toEqual({
    name: "Vasya",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test("Method check levelUp health = 0", () => {
  expect(() => {
    const result = new Bowman("Vasya");
    result.health = 0;
    result.levelUp();
  }).toThrow("Нельзя повысить левел умершего");
});

test("Method check damage() health = 0", () => {
  const result = new Bowman("Vasya");
  result.health = 0;
  result.damage(5);
  expect(result.health).toBe(0);
});

test("Method check damage()", () => {
  const result = new Bowman("Vasya");
  result.defence = 50;
  result.damage(10);
  expect(result.health).toBe(95);
});
