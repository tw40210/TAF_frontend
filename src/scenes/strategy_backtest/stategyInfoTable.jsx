import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { tokens } from "../../contexts/theme";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useContext, useEffect } from "react";
import { PriceDataContext } from "../../contexts/price_data";
import { fetchMetaData, fetchStrategies } from "../../actions/backend";
import { StrategyContext } from "../../contexts/strategies";
import EditButton from "./editButton";
import { updateStrategies } from "../../api/backend";
import SimpleDataGrid from "../../components/SimpleDataGrid";
import { initStrategy } from "../../data/initData";
import { AlgoContext } from "../../contexts/algos";

const StategyInfoTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const globalStrategyContext = useContext(StrategyContext);
  const globalAlgoContext = useContext(AlgoContext);

  const handleSaveStrategy = () => {
    updateStrategies(globalStrategyContext.strategies);
  };

  const handleAddStrategy = () => {
    let newStrategyId = 0;
    while (
      `strategy-${newStrategyId}` in
      globalStrategyContext.strategies.strategyInfo
    ) {
      newStrategyId = newStrategyId + 1;
    }

    newStrategyId = `strategy-${newStrategyId}`;
    const newStrategy = {
      ...initStrategy,
      id: newStrategyId,
      stackId: globalAlgoContext.algoStacks.stackOrder[0],
    };

    const newState = {
      ...globalStrategyContext.strategies,
      strategyInfo: {
        ...globalStrategyContext.strategies.strategyInfo,
        [newStrategyId]: newStrategy,
      },
      strategyOrder: [
        ...globalStrategyContext.strategies.strategyOrder,
        newStrategyId,
      ],
    };
    globalStrategyContext.setStrategies(newState);
  };

  const handleDelete = (strategyId) => {
    const newStrategyInfo = Object.assign(
      {},
      globalStrategyContext.strategies.strategyInfo
    );
    delete newStrategyInfo[strategyId];

    const newState = {
      ...globalStrategyContext.strategies,
      strategyInfo: newStrategyInfo,
      strategyOrder: globalStrategyContext.strategies.strategyOrder.filter(
        (id) => id !== strategyId
      ),
    };
    globalStrategyContext.setStrategies(newState);
  };

  const setGlobalStrategyInfo = (value) => {
    globalStrategyContext.setStrategies((prev) => ({
      ...prev,
      strategyInfo: {
        ...prev.strategyInfo,
        [value.id]: value,
      },
    }));
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
      field: "stackId",
      headerName: "Algo Stack Id",
      flex: 1,
    },
    {
      field: "securities",
      headerName: "Securities",
      flex: 1,
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
              tableType="strategy"
              tmpData={params.row}
              setGlobalFunc={setGlobalStrategyInfo}
            />
            <IconButton
              type="button"
              onClick={() => {
                handleDelete(params.row.id);
              }}
              sx={{ p: 1 }}
            >
              <DeleteForeverOutlinedIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const strategyToolbar = () => {
    return (
      <GridToolbarContainer sx={{ margin: "0 0 5px 0" }}>
        <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
          ・Strategies
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          size="large"
          onClick={handleAddStrategy}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add
        </Button>
        <Button
          size="large"
          onClick={handleSaveStrategy}
          startIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
        <GridToolbarExport size="large" />
      </GridToolbarContainer>
    );
  };

  return (
    <SimpleDataGrid
      rows={Object.values(globalStrategyContext.strategies.strategyInfo)}
      columns={columns}
      components={{ Toolbar: strategyToolbar }}
      styles={{ m: "15px 0", height: "35vh" }}
    />
  );
};

export default StategyInfoTable;
