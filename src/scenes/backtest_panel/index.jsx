import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../contexts/theme";
import { useContext } from "react";
import { BacktestContext } from "../../contexts/backtests";
import LineChart from "../../components/line/LineChart";
import BacktestStatsTable from "./backtestStatsTable";

const BacktestPanel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const globalBacktestContext = useContext(BacktestContext);

  return (
    <Box m="20px">
      <Header
        title="Backtest Panel"
        subtitle="Walk through your backtest results"
      />
      <Box height="40vh">
        <LineChart
          inputData={Object.values(globalBacktestContext.backtestPrices)}
        />
      </Box>
      <Box height="30vh">
        <BacktestStatsTable />
      </Box>
    </Box>
  );
};

export default BacktestPanel;
