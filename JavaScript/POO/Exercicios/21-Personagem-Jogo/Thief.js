const Character = require("./Character.js");

class Thief extends Character {
  constructor(_characterName, _qtyLife, _ptsAttack, _ptsDefense) {
    super(_characterName, _qtyLife, _ptsAttack, _ptsDefense);
  }
  attack(_targetCharacter) {
    _targetCharacter.life -= 2 * (_targetCharacter.ptsDefense - this.ptsAttack);
  }
}
