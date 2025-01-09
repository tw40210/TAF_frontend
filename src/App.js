import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./contexts/theme";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import PriceDataTable from "./scenes/price_data_table";
import { PriceDataContext } from "./contexts/price_data";
import { AccountInfoContext } from "./contexts/account_info";
import { PageUrl } from "./data/page_url";
import TowerOfMyth from "./scenes/tower_of_myth";
import Enhancement from "./scenes/enhancement";
import HeroAltar from "./scenes/hero_altar";
import HeroLobby from "./scenes/hero_lobby";
import { initAccountInfo } from "./data/initData";

function App() {
  const [theme, colorMode] = useMode();
  const [priceData, setPriceData] = useState({ price: 100 });
  const [priceMetaData, setPriceMetaData] = useState([]);
  const [accountInfo, setAccountInfo] = useState(initAccountInfo);

  return (
            <ColorModeContext.Provider value={colorMode}>
              <PriceDataContext.Provider
                value={{
                  priceData,
                  setPriceData,
                  priceMetaData,
                  setPriceMetaData,
                }}
              >
                <AccountInfoContext.Provider
                  value={{
                    accountInfo, setAccountInfo
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
                            path={PageUrl.TowerOfMyth}
                            element={<TowerOfMyth />}
                          />
                          <Route
                            path={PageUrl.Enhancement}
                            element={<Enhancement />}
                          />
                          <Route
                            path={PageUrl.HeroAltar}
                            element={<HeroAltar />}
                          />
                          <Route
                            path={PageUrl.HeroLobby}
                            element={<HeroLobby />}
                          />
                        </Routes>
                      </main>
                    </div>
                  </ThemeProvider>
                </AccountInfoContext.Provider>
              </PriceDataContext.Provider>
            </ColorModeContext.Provider>
  );
}

export default App;
