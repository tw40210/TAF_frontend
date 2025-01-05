import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../contexts/theme";
import { useContext } from "react";
import { BacktestContext } from "../../contexts/backtests";
import SimpleDataGrid from "../../components/SimpleDataGrid";

const BacktestStatsTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const globalBacktestContext = useContext(BacktestContext);

  const columns = [
    {
      field: "padding",
      headerName: "",
      width: 20,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "id",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      minWidth: 100,
    },
    {
      field: "start",
      headerName: "start",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "end",
      headerName: "end",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "total_return",
      headerName: "total_return",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "avg_down_month",
      headerName: "avg_down_month",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "avg_drawdown",
      headerName: "avg_drawdown",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "avg_drawdown_days",
      headerName: "avg_drawdown_days",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "avg_up_month",
      headerName: "avg_up_month",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "best_day",
      headerName: "best_day",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "best_month",
      headerName: "best_month",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "best_year",
      headerName: "best_year",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "cagr",
      headerName: "cagr",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "calmar",
      headerName: "calmar",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "daily_kurt",
      headerName: "daily_kurt",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "daily_mean",
      headerName: "daily_mean",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "daily_sharpe",
      headerName: "daily_sharpe",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "daily_skew",
      headerName: "daily_skew",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "daily_sortino",
      headerName: "daily_sortino",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "daily_vol",
      headerName: "daily_vol",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "five_year",
      headerName: "five_year",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "incep",
      headerName: "incep",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "max_drawdown",
      headerName: "max_drawdown",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "monthly_kurt",
      headerName: "monthly_kurt",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "monthly_mean",
      headerName: "monthly_mean",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "monthly_sharpe",
      headerName: "monthly_sharpe",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "monthly_skew",
      headerName: "monthly_skew",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "monthly_sortino",
      headerName: "monthly_sortino",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "monthly_vol",
      headerName: "monthly_vol",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "mtd",
      headerName: "mtd",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "one_year",
      headerName: "one_year",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "rf",
      headerName: "rf",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "six_month",
      headerName: "six_month",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "ten_year",
      headerName: "ten_year",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "three_month",
      headerName: "three_month",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "three_year",
      headerName: "three_year",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "twelve_month_win_perc",
      headerName: "twelve_month_win_perc",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "win_year_perc",
      headerName: "win_year_perc",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "worst_day",
      headerName: "worst_day",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "worst_month",
      headerName: "worst_month",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "worst_year",
      headerName: "worst_year",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "yearly_kurt",
      headerName: "yearly_kurt",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "yearly_mean",
      headerName: "yearly_mean",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "yearly_sharpe",
      headerName: "yearly_sharpe",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "yearly_skew",
      headerName: "yearly_skew",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "yearly_sortino",
      headerName: "yearly_sortino",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "yearly_vol",
      headerName: "yearly_vol",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "ytd",
      headerName: "ytd",
      flex: 1,
      minWidth: 100,
    },
  ];

  return (
    <SimpleDataGrid
      rows={Object.values(globalBacktestContext.backtestStats)}
      columns={columns}
      styles={{ m: "40px 0 0 0", height: "30vh" }}
    />
  );
};

export default BacktestStatsTable;
