import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { tokens } from "../../contexts/theme";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { useContext } from "react";
import { getBacktestsResults } from "../../actions/backend";
import { BacktestContext } from "../../contexts/backtests";
import EditButton from "./editButton";
import { updateBacktests } from "../../api/backend";
import { useNavigate } from "react-router-dom";
import SimpleDataGrid from "../../components/SimpleDataGrid";
import { StrategyContext } from "../../contexts/strategies";
import { initBacktest } from "../../data/initData";
import { PageUrl } from "../../data/page_url";

const BacktestInfoTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const globalBacktestContext = useContext(BacktestContext);
  const globalStrategyContext = useContext(StrategyContext);

  const setGlobalBacktests = (value) => {
    globalBacktestContext.setBacktests((prev) => ({
      ...prev,
      backtestInfo: {
        ...prev.backtestInfo,
        [value.id]: value,
      },
    }));
  };

  const handleAddBacktest = () => {
    let newBacktestId = 0;
    while (
      `backtest-${newBacktestId}` in
      globalBacktestContext.backtests.backtestInfo
    ) {
      newBacktestId = newBacktestId + 1;
    }

    newBacktestId = `backtest-${newBacktestId}`;
    const newBacktest = {
      ...initBacktest,
      id: newBacktestId,
      strategyId: globalStrategyContext.strategies.strategyOrder[0],
    };

    const newState = {
      ...globalBacktestContext.backtests,
      backtestInfo: {
        ...globalBacktestContext.backtests.backtestInfo,
        [newBacktestId]: newBacktest,
      },
      backtestOrder: [
        ...globalBacktestContext.backtests.backtestOrder,
        newBacktestId,
      ],
    };
    globalBacktestContext.setBacktests(newState);
  };

  const handleDeleteBacktest = (backtestId) => {
    const newBacktestInfo = Object.assign(
      {},
      globalBacktestContext.backtests.backtestInfo
    );
    delete newBacktestInfo[backtestId];

    const newState = {
      ...globalBacktestContext.backtests,
      backtestInfo: newBacktestInfo,
      backtestOrder: globalBacktestContext.backtests.backtestOrder.filter(
        (id) => id !== backtestId
      ),
    };
    globalBacktestContext.setBacktests(newState);
  };
  const handleSaveBacktest = () => {
    updateBacktests(globalBacktestContext.backtests);
  };
  const handleRun = () => {
    // Run backtests and jump to backtest_panel
    getBacktestsResults(
      globalBacktestContext.setBacktestPrices,
      globalBacktestContext.setBacktestStats
    );
    navigate(PageUrl.BacktestPanel);
  };

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
    },
    {
      field: "strategyId",
      headerName: "Strategy ID",
      flex: 2,
    },
    {
      field: "additional",
      headerName: "Options",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EditButton
              tableType="backtest"
              tmpData={params.row}
              setGlobalFunc={setGlobalBacktests}
            />
            <IconButton
              type="button"
              onClick={() => handleDeleteBacktest(params.row.id)}
              sx={{ p: 1 }}
            >
              <DeleteForeverOutlinedIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const backtestToolbar = () => {
    return (
      <GridToolbarContainer sx={{ margin: "0 0 5px 0" }}>
        <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
          ・Backtests
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          size="large"
          onClick={handleAddBacktest}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add
        </Button>
        <Button
          size="large"
          onClick={handleSaveBacktest}
          startIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
        <Button
          size="large"
          onClick={handleRun}
          startIcon={<PlayCircleOutlineIcon />}
        >
          Run
        </Button>
        <GridToolbarExport size="large" />
      </GridToolbarContainer>
    );
  };

  return (
    <SimpleDataGrid
      rows={Object.values(globalBacktestContext.backtests.backtestInfo)}
      columns={columns}
      components={{ Toolbar: backtestToolbar }}
      styles={{ m: "15px 0 ", height: "35vh" }}
    />
  );
};

export default BacktestInfoTable;
