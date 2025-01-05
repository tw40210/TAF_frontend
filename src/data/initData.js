import { tokens } from "../contexts/theme";

export const initAlgoStack = {
  id: "stack-*",
  title: "To do",
  algoIds: [],
};

export const initStrategy = {
  id: "strategy-*",
  stackId: "stack-*",
  securities: [],
  additional: {},
};

export const initBacktest = {
  id: "backtest-*",
  strategyId: "strategy-*",
  securityList: ["AAPL", "GOOG"],
  additional: {},
};

export const initialAlgoStacks = {
  algos: {
    "task-0": {
      id: "task-0",
      content: "Cook dinner",
      algoType: "Empty",
      additional: {},
    },
  },
  algoStackInfo: {
    "stack-0": {
      id: "stack-0",
      title: "To do",
      algoIds: ["task-0"],
    },
  },
  // Facilitate reordering of the stacks
  stackOrder: ["stack-0"],
};

export const initialStrategies = {
  strategyInfo: {
    "strategy-0": {
      id: "strategy-0",
      stackId: "stack-*",
      securities: ["AAPL", "GOOG"],
      additional: {},
    },
  },
  strategyOrder: ["strategy-0"],
};

export const initialBacktests = {
  backtestInfo: {
    "backtest-0": {
      id: "backtest-0",
      strategyId: "strategy-0",
      securityList: [],
      additional: {},
    },
  },
  backtestOrder: ["backtest-0"],
};

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

export const initialBacktestStats = {
  "backtest-0": {
    id: "backtest-0",
    avg_down_month: "nan",
    avg_drawdown: "nan",
    avg_drawdown_days: "nan",
    avg_up_month: "nan",
    best_day: "nan",
    best_month: "nan",
    best_year: "nan",
    cagr: "nan",
    calmar: "nan",
    daily_kurt: "nan",
    daily_mean: "nan",
    daily_sharpe: "nan",
    daily_skew: "nan",
    daily_sortino: "nan",
    daily_vol: "nan",
    end: "N/A",
    five_year: "nan",
    incep: "nan",
    max_drawdown: "nan",
    monthly_kurt: "nan",
    monthly_mean: "nan",
    monthly_sharpe: "nan",
    monthly_skew: "nan",
    monthly_sortino: "nan",
    monthly_vol: "nan",
    mtd: "nan",
    one_year: "nan",
    rf: "nan",
    six_month: "nan",
    start: "N/A",
    ten_year: "nan",
    three_month: "nan",
    three_year: "nan",
    total_return: "nan",
    twelve_month_win_perc: "nan",
    win_year_perc: "nan",
    worst_day: "nan",
    worst_month: "nan",
    worst_year: "nan",
    yearly_kurt: "nan",
    yearly_mean: "nan",
    yearly_sharpe: "nan",
    yearly_skew: "nan",
    yearly_sortino: "nan",
    yearly_vol: "nan",
    ytd: "nan",
  },
};
