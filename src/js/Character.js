export default class Character {
  constructor(name, type) {
    if (name.length > 10 || name.length < 2) {
      throw new Error("Ошибка. Имя не может быть короче 2 символов и длиннее 10");
    }
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (types.indexOf(type) === -1) {
      throw new Error("Ошибка. Такого персонажа нет.");
    }
    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error("Нельзя повысить левел умершего");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
