import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./contexts/theme";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import PriceDataTable from "./scenes/price_data_table";
import { PriceDataContext } from "./contexts/price_data";
import AlgoStacks from "./scenes/algo_stacks";
import { AlgoProvider, TmpAlgoStackProvider } from "./contexts/algos";
import {
  initialAlgoStacks,
  initialBacktests,
  initialBacktestPrices,
  initialBacktestStats,
  initialStrategies,
} from "./data/initData";
import { StrategyProvider } from "./contexts/strategies";
import { BacktestProvider } from "./contexts/backtests";
import BacktestPanel from "./scenes/backtest_panel";
import StrategyBacktest from "./scenes/strategy_backtest";
import { PageUrl } from "./data/page_url";

function App() {
  const [theme, colorMode] = useMode();
  const [priceData, setPriceData] = useState({ price: 100 });
  const [priceMetaData, setPriceMetaData] = useState([]);

  return (
    <BacktestProvider
      initialData={{
        backtests: initialBacktests,
        backtestPrices: initialBacktestPrices,
        backtestStats: initialBacktestStats,
        strategyCount: 0,
      }}
    >
      <StrategyProvider
        initialData={{
          strategies: initialStrategies,
          strategyCount: 0,
        }}
      >
        <TmpAlgoStackProvider initialData={initialAlgoStacks}>
          <AlgoProvider
            initialData={{
              algoCount: 0,
              algoStacks: initialAlgoStacks,
              algoStackId: null,
            }}
          >
            <ColorModeContext.Provider value={colorMode}>
              <PriceDataContext.Provider
                value={{
                  priceData,
                  setPriceData,
                  priceMetaData,
                  setPriceMetaData,
                }}
              >
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <div className="app">
                    <Sidebar />
                    <main className="content">
                      <Topbar />
                      <Routes>
                        <Route
                          path={PageUrl.Dashboard}
                          element={<Dashboard />}
                        />
                        <Route path={PageUrl.Root} element={<Dashboard />} />
                        <Route
                          path={PageUrl.PriceDataTable}
                          element={<PriceDataTable />}
                        />
                        <Route
                          path={PageUrl.BacktestPanel}
                          element={<BacktestPanel />}
                        />
                        <Route
                          path={PageUrl.AlgoStacks}
                          element={<AlgoStacks />}
                        />
                        <Route
                          path={PageUrl.StrategyBacktest}
                          element={<StrategyBacktest />}
                        />
                      </Routes>
                    </main>
                  </div>
                </ThemeProvider>
              </PriceDataContext.Provider>
            </ColorModeContext.Provider>
          </AlgoProvider>
        </TmpAlgoStackProvider>
      </StrategyProvider>
    </BacktestProvider>
  );
}

export default App;
