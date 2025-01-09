import { createContext} from "react";
import {AccountInfo} from "../data/object"

// context for color mode
export const AccountInfoContext = createContext({
    accountInfo: new AccountInfo(
      -1, 
      "defaultAccount", 
      {towerOfmyth: {level: 0}}, 
      [], 
      [], 
      {}
    ),
    setAccountInfo: () => {},
  });
  