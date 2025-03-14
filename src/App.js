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
import Treasures from "./scenes/Treasures";
import Header from "./components/logHeader";
import { AuthProvider } from "./contexts/authContext";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/logHome";
import ProtectedRoute from "./firebase/protect_route";

function App() {
  const [theme, colorMode] = useMode();
  const [priceData, setPriceData] = useState({ price: 100 });
  const [priceMetaData, setPriceMetaData] = useState([]);
  const [accountInfo, setAccountInfo] = useState(initAccountInfo);

  return (
          <AuthProvider>
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
                            element={
                              <ProtectedRoute>
                                <Dashboard />
                              </ProtectedRoute>
                              }
                            
                          />
                          <Route path={PageUrl.Root} 
                          element={
                            <ProtectedRoute>
                              <Dashboard />
                            </ProtectedRoute>
                            } 
                          />
                          <Route
                            path={PageUrl.PriceDataTable}
                            element={
                              <ProtectedRoute>
                                <PriceDataTable />
                              </ProtectedRoute>
                              }
                          />
                          <Route
                            path={PageUrl.TowerOfMyth}
                            element={
                              <ProtectedRoute>
                                <TowerOfMyth />
                              </ProtectedRoute>
                              }
                          />
                          <Route
                            path={PageUrl.Enhancement}
                            element={
                              <ProtectedRoute>
                                <Enhancement />
                              </ProtectedRoute>
                              }
                          />
                          <Route
                            path={PageUrl.HeroAltar}
                            element={
                              <ProtectedRoute>
                                <HeroAltar />
                              </ProtectedRoute>
                              }
                          />
                          <Route
                            path={PageUrl.HeroLobby}
                            element={
                              <ProtectedRoute>
                                <HeroLobby />
                              </ProtectedRoute>
                              }
                          />
                          <Route
                            path={PageUrl.Treasures}
                            // element={<Treasures />}
                            element={
                            <ProtectedRoute>
                              <Treasures />
                            </ProtectedRoute>
                            }
                          />
                          <Route
                            path={"/header"}
                            // element={<Treasures />}
                            element={<Header />}
                          />
                          <Route
                            path={"/register"}
                            // element={<Treasures />}
                            element={<Register />}
                          />
                          <Route
                            path={"/login"}
                            // element={<Treasures />}
                            element={<Login />}
                          />
                          <Route
                            path={"/home"}
                            // element={<Treasures />}
                            element={<Home />}
                          />
                        </Routes>
                      </main>
                    </div>
                  </ThemeProvider>
                </AccountInfoContext.Provider>
              </PriceDataContext.Provider>
            </ColorModeContext.Provider>
          </AuthProvider>
  );
}

export default App;
