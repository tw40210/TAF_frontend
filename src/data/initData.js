import { tokens } from "../contexts/theme";
import {AccountInfo} from "./object";

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
  -1, 
  "defaultAccount", 
  {towerOfmyth: {level: 0}}, 
  [], 
  [], 
  {},
  structuredClone(initPartySets)
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
