import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";

import { tokens } from "../../contexts/theme";

import StategyInfoTable from "./stategyInfoTable";
import BacktestInfoTable from "./backtestInfoTable";
import { useContext, useEffect } from "react";
import { fetchMetaData } from "../../actions/backend";
import { PriceDataContext } from "../../contexts/price_data";

const StrategyBacktest = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const priceDataConext = useContext(PriceDataContext);

  useEffect(() => {
    fetchMetaData(priceDataConext.setPriceMetaData);
  }, []);

  return (
    <Box m="20px">
      <Header
        title="Strategies & Backtests"
        subtitle="Manage your strategies and backtets"
      />
      <Box>
        <StategyInfoTable />
      </Box>
      <Box margin="35px 0 0 0">
        <BacktestInfoTable />
      </Box>
    </Box>
  );
};

export default StrategyBacktest;
