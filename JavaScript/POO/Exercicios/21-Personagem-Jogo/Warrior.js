const Character = require("./Character.js");

class Warrior extends Character {
  constructor(_characterName, _qtyLife, _ptsAttack, _ptsDefense, _defShield) {
    super(_characterName, _qtyLife, _ptsAttack, _ptsDefense);

    this.shield = _defShield;
    this.activeShield = false;
  }
  attack(_targetCharacter) {
    this.activeShield
      ? console.log("Modo de defesa! Não pode atacar.")
      : super.attack(_targetCharacter);
  }
  defense_mode() {
    if (this.activeShield) {
      this.activeShield = false;
      this.ptsDefense -= this.shield;
    } else {
      this.activeShield = true;
      this.ptsDefense += this.shield;
    }
  }
}
