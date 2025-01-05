import { createContext, useEffect, useState } from "react";
import { fetchStrategies } from "../actions/backend";

// context for color mode
export const StrategyContext = createContext({
  strategyCount: null,
  setStrategyCount: () => {},
  strategies: null,
  setStrategies: () => {},
});

export const StrategyProvider = ({ children, initialData }) => {
  const [strategies, setStrategies] = useState(initialData["strategies"]);
  const [strategyCount, setStrategyCount] = useState(0);

  useEffect(() => {
    fetchStrategies(setStrategies);
  }, []);

  return (
    <StrategyContext.Provider
      value={{ strategyCount, setStrategyCount, strategies, setStrategies }}
    >
      {children}
    </StrategyContext.Provider>
  );
};

export const TmpStrategyContext = createContext({
  tmpStrategyInfo: null,
  setTmpStrategyInfo: () => {},
});

export const TmpStrategyProvider = ({ children, initialData }) => {
  const [tmpStrategyInfo, setTmpStrategyInfo] = useState(
    initialData["tmpStrategyInfo"]
  );

  return (
    <TmpStrategyContext.Provider
      value={{ tmpStrategyInfo, setTmpStrategyInfo }}
    >
      {children}
    </TmpStrategyContext.Provider>
  );
};
