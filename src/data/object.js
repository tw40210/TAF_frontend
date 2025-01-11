export class HeroCharacter {
    constructor(id, name, level) {
      this.id=id
      this.name = name;
      this.level = level;
    }
}

export class AccountInfo {
    constructor(id, name, stories, heros, items, status, party_sets) {
      this.id = id;
      this.name = name;
      this.stories = stories;
      this.heros = heros;
      this.items = items;
      this.status = status;
      this.party_sets = party_sets;
    }
}
