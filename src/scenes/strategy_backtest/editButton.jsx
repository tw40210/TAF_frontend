import React, { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Popover,
  Select,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../contexts/theme";
import { PriceDataContext } from "../../contexts/price_data";
import { AlgoContext } from "../../contexts/algos";
import { StrategyContext } from "../../contexts/strategies";

const StrategyEditPopOver = ({ tmpData, setGlobalFunc, handleClose }) => {
  const [tmpEditingData, setTmpEditingData] = useState(tmpData);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const globalPriceDataConext = useContext(PriceDataContext);
  const globalAlgoContext = useContext(AlgoContext);

  const [stackId, setStackId] = useState(tmpData.stackId);
  const [securities, setSecurities] = useState(tmpData.securities);

  const handleStackIdChange = (event) => {
    const newTmpEditingData = {
      ...tmpEditingData,
      stackId: event.target.value,
    };
    setTmpEditingData(newTmpEditingData);
    setStackId(event.target.value);
  };

  const handleSecuritiesChange = (event) => {
    const newSecurities =
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value;
    const newTmpEditingData = {
      ...tmpEditingData,
      securities: newSecurities,
    };
    setTmpEditingData(newTmpEditingData);
    setSecurities(newSecurities);
  };

  const handleSave = () => {
    setGlobalFunc(tmpEditingData);
    handleClose();
  };

  const ChipSelect = () => {
    return (
      <FormControl sx={{ width: "97%" }}>
        <InputLabel id="securities-select-label">Securities</InputLabel>
        <Select
          labelId="securities-label"
          id="securities"
          value={securities}
          label="Securities"
          multiple
          onChange={handleSecuritiesChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {globalPriceDataConext.priceMetaData.map(({ name }) => (
            <MenuItem value={name}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <Paper
      variant="elevation"
      elevation={24}
      sx={{
        width: "40vw", // 40% of the viewport width
        height: "50vh", // 50% of the viewport height
        padding: "16px", // Optional: Add some padding for inner content
        boxSizing: "border-box", // Ensure padding doesn't affect the width/height
        ml: "20px",
        background: colors.grey[800],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            m="10px"
            display="flex"
            alignContent="center"
            justifyContent="center"
          >
            <Typography variant="h4">ID: {tmpData.id}</Typography>
          </Box>
          <Box width="100%">
            <FormControl sx={{ width: "97%" }}>
              <InputLabel id="strategy-stackId-select-label">
                Stack ID
              </InputLabel>
              <Select
                labelId="strategy-stackId-label"
                id="strategy-stackId"
                value={stackId}
                label="Strategy stackId"
                onChange={handleStackIdChange}
              >
                {globalAlgoContext.algoStacks.stackOrder.map((stackId) => (
                  <MenuItem value={stackId}>{stackId}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box width="100%" margin="15px 0">
            <ChipSelect />
          </Box>
        </Box>

        <Box display="flex" alignContent="center" justifyContent="right">
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              m: "15px 22px",
              background: colors.blueAccent[700],
              width: "15%",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

const BacktestEditPopOver = ({ tmpData, setGlobalFunc, handleClose }) => {
  const [tmpEditingData, setTmpEditingData] = useState(tmpData);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const globalStrategyContext = useContext(StrategyContext);
  const [strategyId, setStrategyId] = useState(tmpData.strategyId);

  const handleSave = () => {
    setGlobalFunc(tmpEditingData);
    handleClose();
  };
  const handleStrategyIdChange = (event) => {
    const newTmpEditingData = {
      ...tmpEditingData,
      strategyId: event.target.value,
    };
    setTmpEditingData(newTmpEditingData);
    setStrategyId(event.target.value);
  };

  return (
    <Paper
      variant="elevation"
      elevation={24}
      sx={{
        width: "40vw", // 40% of the viewport width
        height: "50vh", // 50% of the viewport height
        padding: "16px", // Optional: Add some padding for inner content
        boxSizing: "border-box", // Ensure padding doesn't affect the width/height
        ml: "20px",
        background: colors.grey[800],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            m="10px"
            display="flex"
            alignContent="center"
            justifyContent="center"
          >
            <Typography variant="h4">ID: {tmpData.id}</Typography>
          </Box>
          <Box width="100%">
            <FormControl sx={{ width: "97%" }}>
              <InputLabel id="strategy-stackId-select-label">
                Stack ID
              </InputLabel>
              <Select
                labelId="strategy-stackId-label"
                id="strategy-stackId"
                value={strategyId}
                label="Strategy stackId"
                onChange={handleStrategyIdChange}
              >
                {globalStrategyContext.strategies.strategyOrder.map(
                  (strategyId) => (
                    <MenuItem value={strategyId}>{strategyId}</MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box display="flex" alignContent="center" justifyContent="right">
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              m: "15px 22px",
              background: colors.blueAccent[700],
              width: "15%",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

const EditButton = ({
  tableType,
  tmpData = undefined,
  setGlobalFunc = undefined,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton type="button" onClick={handleClick} sx={{ p: 1 }}>
        <EditIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {tableType === "strategy" && (
          <StrategyEditPopOver
            tmpData={tmpData}
            setGlobalFunc={setGlobalFunc}
            handleClose={handleClose}
          />
        )}
        {tableType === "backtest" && (
          <BacktestEditPopOver
            tmpData={tmpData}
            setGlobalFunc={setGlobalFunc}
            handleClose={handleClose}
          />
        )}
      </Popover>
    </Box>
  );
};

export default EditButton;
