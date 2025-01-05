import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./contexts/theme";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import PriceDataTable from "./scenes/price_data_table";
import { PriceDataContext } from "./contexts/price_data";
import { PageUrl } from "./data/page_url";

function App() {
  const [theme, colorMode] = useMode();
  const [priceData, setPriceData] = useState({ price: 100 });
  const [priceMetaData, setPriceMetaData] = useState([]);

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
                      </Routes>
                    </main>
                  </div>
                </ThemeProvider>
              </PriceDataContext.Provider>
            </ColorModeContext.Provider>
  );
}

export default App;
