import { createContext} from "react";

// context for color mode
export const BackTestStatsContext = createContext({
    backTestStats: {rate: 1.12},
    setBackTestStats: () => {},
  });
