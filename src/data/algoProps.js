export const AllAlgoList = [
  "RunOnce",
  "RunDaily",
  "RunWeekly",
  "RunMonthly",
  "RunQuarterly",
  "RunYearly",
  "SelectAll",
  "SelectRandomly",
  "SelectN",
  "WeighEqually",
  "WeighRandomly",
  "Rebalance",
  "StatDrawdown",
  "StatInfoRatio",
  "PriceFilterAlgo",
  "TrendFollowingAlgo",
  "MomentumInvestingAlgo",
  "MeanReversionAlgo",
  "Empty",
];

export const initPropDict = {
  bool: {},
  int: {},
  float: {},
  category: {},
};

// Every prop needs a initial value in AllAlgoPropDict.
// If you are adding bool/category prop, you also need to add all options into AlgoCategoryPropDict.
export const AllAlgoPropDict = {
  RunOnce: { ...initPropDict },
  RunDaily: { ...initPropDict },
  RunWeekly: { ...initPropDict },
  RunMonthly: { ...initPropDict },
  RunQuarterly: { ...initPropDict },
  RunYearly: { ...initPropDict },
  SelectAll: { ...initPropDict },
  SelectRandomly: { ...initPropDict, int: { n: "5" } },
  SelectN: {
    ...initPropDict,
    int: { n: "3" },
    bool: { sort_descending: "True" },
  },
  WeighEqually: { ...initPropDict },
  WeighRandomly: { ...initPropDict },
  Not: { ...initPropDict },
  Or: { ...initPropDict },
  Rebalance: { ...initPropDict },
  StatDrawdown: { ...initPropDict, int: { lookback: "15", lag: "1" } },
  StatInfoRatio: {
    ...initPropDict,
    int: { lookback: "15", lag: "1" },
    category: { benchmark: "GOOG" },
  },
  PriceFilterAlgo: { ...initPropDict, int: { lookback: "15", lag: "1" } },
  TrendFollowingAlgo: {
    ...initPropDict,
    int: { short_window: "10", long_window: "30", lookback: "15", lag: "1" },
  },
  MomentumInvestingAlgo: {
    ...initPropDict,
    int: { window: "5", lookback: "15", lag: "1" },
  },
  MeanReversionAlgo: { ...initPropDict, int: { lookback: "15", lag: "1" } },
  Empty: { ...initPropDict },
};

export const AlgoCategoryPropDict = {
  SelectN: {
    sort_descending: ["True", "False"],
  },
  StatInfoRatio: {
    benchmark: ["AAPL", "AMZN", "GOOG"],
  },
};
