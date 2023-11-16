class Character {
  constructor(_characterName, _qtyLife, _ptsAttack, _ptsDefense) {
    this.characterName = _characterName;
    this.life = _qtyLife;
    this.ptsAttack = _ptsAttack;
    this.ptsDefense = _ptsDefense;
  }

  attack(_targetCharacter) {
    _targetCharacter.life -= _targetCharacter.ptsDefense - this.ptsAttack;
  }
}

module.exports = Character;
