const Character = require("./Character.js");

class Mage extends Character {
  constructor(_characterName, _qtyLife, _ptsAttack, _ptsDefense, _ptsMagic) {
    super(_characterName, _qtyLife, _ptsAttack, _ptsDefense);
    this.ptsMagic = _ptsMagic;
  }
  attack(_targetCharacter) {
    _targetCharacter.life -=
      _targetCharacter.ptsDefense - (this.ptsAttack + this.ptsMagic);
  }
  heal(_targetCharacter) {
    _targetCharacter.life = 2 * this.ptsMagic;
  }
}
