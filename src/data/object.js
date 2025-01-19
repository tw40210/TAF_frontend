export class HeroCharacter {
    constructor({id, name, level, heroTraitSets, itemSet}) {
      this.id=id
      this.name = name;
      this.level = level;
      this.heroTraitSets = heroTraitSets
      this.itemSet = itemSet
    }
}

export class AccountInfo {
    constructor({id, name, stories, heros, items, status, party_sets}) {
      this.id = id;
      this.name = name;
      this.stories = stories;
      this.heros = heros;
      this.items = items;
      this.status = status;
      this.party_sets = party_sets;
    }
}

export class HeroTrait {
  constructor({trait_id, trait_level}) {
    this.trait_id = trait_id;
    this.trait_level = trait_level;
  }
}

export class HeroTraitSet {
  constructor({trait_0, trait_1, trait_2, trait_3, trait_4}) {
    this.trait_0 = trait_0;
    this.trait_1 = trait_1;
    this.trait_2 = trait_2;
    this.trait_3 = trait_3;
    this.trait_4 = trait_4;
  }
}

export class HeroTraitSets {
  constructor({traitSet_0, traitSet_1, traitSet_2, traitSet_3, traitSet_4, traitSet_5}) {
    this.traitSet_0 = traitSet_0;
    this.traitSet_1 = traitSet_1;
    this.traitSet_2 = traitSet_2;
    this.traitSet_3 = traitSet_3;
    this.traitSet_4 = traitSet_4;
    this.traitSet_5 = traitSet_5;
  }
}

export class Item {
  constructor({id, amount}) {
    this.id = id;
    this.amount = amount;
  }
}
