import { tokens } from "../contexts/theme";
import {AccountInfo, HeroCharacter} from "./object";

export const initPartySets = {
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


export const initAccountInfo = new AccountInfo(
  -1, //id
  "defaultAccount", //name
  {towerOfmyth: {level: 0}}, //stories
  {
    'Option 2': new HeroCharacter(1, 'Option 2', 10),
    'Option 4': new HeroCharacter(3, 'Option 4', 12)
  }, //hero
  {}, //items
  {}, //status
  structuredClone(initPartySets) //party_sets
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
