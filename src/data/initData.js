import { tokens } from "../contexts/theme";
import {AccountInfo, HeroCharacter, HeroTrait, HeroTraitSet, Item} from "./object";

const initPartySets = {
  set1: {
    0: 'Option 1',
    1: 'Option 2',
    2: 'Option 3',
    3: 'Option 4',
    4: 'Option 5',
    5: 'Option 6',
  },
  set2: {
    0: 'Option 1',
    1: 'Option 2',
    2: 'Option 3',
    3: 'Option 4',
    4: 'Option 5',
    5: 'Option 6',
  },
};

const initHeroTraitSet = new HeroTraitSet({
  trait_0:new HeroTrait({trait_id:0, trait_level:1}),
  trait_1:new HeroTrait({trait_id:1, trait_level:7}),
  trait_2:new HeroTrait({trait_id:2, trait_level:8}),
  trait_3:new HeroTrait({trait_id:0, trait_level:1}),
  trait_4:new HeroTrait({trait_id:0, trait_level:1}),
})

const initHeroTraitSets = {
  "Head": structuredClone(initHeroTraitSet),
  "Chest": structuredClone(initHeroTraitSet),
  "Right hand": structuredClone(initHeroTraitSet),
  "Left hand": structuredClone(initHeroTraitSet),
  "Right leg": structuredClone(initHeroTraitSet),
  "Left leg": structuredClone(initHeroTraitSet),
}

const initItemSet = {
  0: structuredClone(new Item({id: 0, amount:5} )),
  1: structuredClone(new Item({id: 1, amount:3} )),
  2: structuredClone(new Item({id: 2, amount:4} )),
}


export const initAccountInfo = new AccountInfo({
  id:-1, 
  name:"defaultAccount",
  stories:{towerOfmyth: {level: 0}}, 
  heros:{
    'Option 2': new HeroCharacter({id:1, name:'Option 2', level:10, heroTraitSets:structuredClone(initHeroTraitSets), itemSet: structuredClone(initItemSet)}),
    'Option 4': new HeroCharacter({id:3, name:'Option 4', level:12, heroTraitSets:structuredClone(initHeroTraitSets), itemSet: structuredClone(initItemSet)})
  }, 
  items:{}, 
  status:{}, 
  party_sets:structuredClone(initPartySets) 
}

)





export const initialBacktestPrices = {
  "backtest-0": {
    id: "backtest-0",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "2018-12-02 00:00:00",
        y: 101,
      },
      {
        x: "2018-12-03 00:00:00",
        y: 75,
      },
      {
        x: "2018-12-04 00:00:00",
        y: 101,
      },
      {
        x: "2018-12-05 00:00:00",
        y: 75,
      },
    ],
  },
};
