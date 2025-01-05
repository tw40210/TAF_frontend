import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { tokens } from "../../contexts/theme";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useContext } from "react";
import { AlgoContext } from "../../contexts/algos";
import { initAlgoStack } from "../../data/initData";
import SimpleDataGrid from "../SimpleDataGrid";

const AlgoInfo = ({ setStackSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const globalAlgoContext = useContext(AlgoContext);

  const handleClickAdd = () => {
    let newAlgoId = 0;
    while (`stack-${newAlgoId}` in globalAlgoContext.algoStacks.algoStackInfo) {
      newAlgoId = newAlgoId + 1;
    }

    newAlgoId = `stack-${newAlgoId}`;
    const newAlgo = { ...initAlgoStack, id: newAlgoId };

    const newState = {
      ...globalAlgoContext.algoStacks,
      algoStackInfo: {
        ...globalAlgoContext.algoStacks.algoStackInfo,
        [newAlgoId]: newAlgo,
      },
      stackOrder: [...globalAlgoContext.algoStacks.stackOrder, newAlgoId],
    };
    globalAlgoContext.setAlgoStacks(newState);
  };

  const handleEdit = (stackId) => {
    setStackSelected(stackId);
  };

  const handleDelete = (stackId) => {
    const newAlgoStackInfo = Object.assign(
      {},
      globalAlgoContext.algoStacks.algoStackInfo
    );
    delete newAlgoStackInfo[stackId];

    const newState = {
      ...globalAlgoContext.algoStacks,
      algoStackInfo: newAlgoStackInfo,
      stackOrder: globalAlgoContext.algoStacks.stackOrder.filter(
        (id) => id !== stackId
      ),
    };
    globalAlgoContext.setAlgoStacks(newState);
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
      field: "algoIds",
      headerName: "Algos",
      flex: 1,
    },
    {
      field: "None",
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
            <IconButton
              type="button"
              onClick={() => handleEdit(params.row.id)}
              sx={{ p: 1 }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              type="button"
              onClick={() => handleDelete(params.row.id)}
              sx={{ p: 1 }}
            >
              <DeleteForeverOutlinedIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const AlgoInfoToolbar = () => {
    return (
      <GridToolbarContainer sx={{ margin: "0 0 5px 0" }}>
        <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
          ・Algo stacks
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Button
          size="large"
          onClick={handleClickAdd}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add
        </Button>
        <GridToolbarExport size="large" />
      </GridToolbarContainer>
    );
  };

  return (
    <Box m="0 20px">
      <SimpleDataGrid
        rows={Object.values(globalAlgoContext.algoStacks.algoStackInfo)}
        columns={columns}
        components={{ Toolbar: AlgoInfoToolbar }}
        styles={{ height: "40vh" }}
      />
    </Box>
  );
};

export default AlgoInfo;
