export class HeroCharacter {
    constructor({id, name, level, heroTraits}) {
      this.id=id
      this.name = name;
      this.level = level;
      this.heroTraits = heroTraits
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

