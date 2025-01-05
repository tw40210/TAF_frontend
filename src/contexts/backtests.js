import { createContext, useEffect, useState } from "react";
import { fetchBacktests } from "../actions/backend";

// context for color mode
export const BacktestContext = createContext({
  backtestCount: null,
  setBacktestCount: () => {},
  backtests: null,
  setBacktests: () => {},
  backtestPrices: null,
  setBacktestPrices: () => {},
  backtestStats: null,
  setBacktestStats: () => {},
});

export const BacktestProvider = ({ children, initialData }) => {
  const [backtests, setBacktests] = useState(initialData["backtests"]);
  const [backtestPrices, setBacktestPrices] = useState(
    initialData["backtestPrices"]
  );
  const [backtestStats, setBacktestStats] = useState(
    initialData["backtestStats"]
  );
  const [backtestCount, setBacktestCount] = useState(0);

  useEffect(() => {
    fetchBacktests(setBacktests);
  }, []);

  return (
    <BacktestContext.Provider
      value={{
        backtestCount,
        setBacktestCount,
        backtests,
        setBacktests,
        backtestPrices,
        setBacktestPrices,
        backtestStats,
        setBacktestStats,
      }}
    >
      {children}
    </BacktestContext.Provider>
  );
};

export const TmpBacktestContext = createContext({
  tmpBacktestInfo: null,
  setTmpBacktestInfo: () => {},
});

export const TmpBacktestProvider = ({ children, initialData }) => {
  const [tmpBacktestInfo, setTmpBacktestInfo] = useState(initialData);

  return (
    <TmpBacktestContext.Provider
      value={{ tmpBacktestInfo, setTmpBacktestInfo }}
    >
      {children}
    </TmpBacktestContext.Provider>
  );
};
