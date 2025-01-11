import { createContext} from "react";
import { initAccountInfo } from "../data/initData";

// context for color mode
export const AccountInfoContext = createContext({
    accountInfo: structuredClone(initAccountInfo),
    setAccountInfo: () => {},
  });
  