import { createContext, useEffect, useState } from "react";
import { initialAlgoStacks } from "../data/initData";
import { fetchAlgoStacks } from "../actions/backend";

// context for color mode
export const AlgoContext = createContext({
  algoCount: null,
  setAlgoCount: () => {},
  algoStacks: null,
  setAlgoStacks: () => {},
  algoStackId: null,
  setAlgoStackId: () => {},
});

export const AlgoProvider = ({ children, initialData }) => {
  const [algoCount, setAlgoCount] = useState(initialData["algoCount"]);
  const [algoStacks, setAlgoStacks] = useState(initialData["algoStacks"]);
  const [algoStackId, setAlgoStackId] = useState(initialData["algoStackId"]);

  useEffect(() => {
    fetchAlgoStacks(setAlgoStacks);
  }, []);

  return (
    <AlgoContext.Provider
      value={{
        algoCount,
        setAlgoCount,
        algoStacks,
        setAlgoStacks,
        algoStackId,
        setAlgoStackId,
      }}
    >
      {children}
    </AlgoContext.Provider>
  );
};

export const TmpScenceAlgoStackContext = createContext({
  tmpAlgoStacks: initialAlgoStacks,
  setTmpAlgoStacks: () => {},
});

export const TmpAlgoStackProvider = ({ children, initialData }) => {
  const [tmpAlgoStacks, setTmpAlgoStacks] = useState(initialData);

  return (
    <TmpScenceAlgoStackContext.Provider
      value={{ tmpAlgoStacks, setTmpAlgoStacks }}
    >
      {children}
    </TmpScenceAlgoStackContext.Provider>
  );
};
