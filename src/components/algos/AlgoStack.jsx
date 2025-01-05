import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { tokens } from "../../contexts/theme";
import AlgoCard from "./AlgoCard";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { initAlgo } from "../../data/initData";
import { AlgoContext, TmpScenceAlgoStackContext } from "../../contexts/algos";
import { updateAlgoStacks } from "../../api/backend";

const AlgoStack = ({ stackId }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const localAlgoContext = useContext(TmpScenceAlgoStackContext);
  const globalAlgoContext = useContext(AlgoContext);

  const stack = localAlgoContext.tmpAlgoStacks.algoStackInfo[stackId];
  const algos = stack.algoIds.map(
    (taskId) => localAlgoContext.tmpAlgoStacks.algos[taskId]
  );

  const handleClickReset = () => {
    localAlgoContext.setTmpAlgoStacks(globalAlgoContext.algoStacks);
  };

  const handleClickSave = () => {
    updateAlgoStacks(localAlgoContext.tmpAlgoStacks);
    globalAlgoContext.setAlgoStacks(localAlgoContext.tmpAlgoStacks);
  };

  const handleClickAdd = () => {
    let newAlgoId = globalAlgoContext.algoCount;
    while (String(newAlgoId) in localAlgoContext.tmpAlgoStacks.algos) {
      newAlgoId = newAlgoId + 1;
    }

    newAlgoId = String(newAlgoId);
    const newAlgo = { ...initAlgo, id: newAlgoId };

    const newState = {
      ...localAlgoContext.tmpAlgoStacks,
      algos: {
        ...localAlgoContext.tmpAlgoStacks.algos,
        [newAlgoId]: newAlgo,
      },
      algoStackInfo: {
        ...localAlgoContext.tmpAlgoStacks.algoStackInfo,
        [stack.id]: {
          ...localAlgoContext.tmpAlgoStacks.algoStackInfo[stack.id],
          algoIds: [...stack.algoIds, newAlgoId],
        },
      },
    };
    localAlgoContext.setTmpAlgoStacks(newState);
    globalAlgoContext.setAlgoCount((prev) => prev + 1);
  };

  const handleCardDelete = (algoId) => {
    const newAlgoStacks = structuredClone(localAlgoContext.tmpAlgoStacks);
    delete newAlgoStacks.algos[algoId];
    newAlgoStacks.algoStackInfo[stack.id].algoIds = newAlgoStacks.algoStackInfo[
      stack.id
    ].algoIds.filter((value) => value !== algoId);
    localAlgoContext.setTmpAlgoStacks(newAlgoStacks);
  };

  return (
    <Box className="stack" width="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor={colors.blueAccent[700]}
        sx={{ mb: "16px", borderRadius: "5px" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            m: "10px",
          }}
        >
          <HorizontalSplitOutlinedIcon
            sx={{
              m: "10px",
              fontSize: "1.9rem",
            }}
          />
          <Typography variant="h3" fontWeight="bold">
            {stack.id}
          </Typography>
        </Box>

        <Box>
          <IconButton
            type="button"
            sx={{
              m: "10px 5px 10px 20px",
            }}
            onClick={handleClickReset}
          >
            <RestartAltOutlinedIcon
              sx={{
                fontSize: "1.6rem",
              }}
            />
          </IconButton>
          <IconButton
            type="button"
            sx={{
              m: "10px 5px 10px 5px",
            }}
            onClick={handleClickSave}
          >
            <SaveOutlinedIcon
              sx={{
                fontSize: "1.6rem",
              }}
            />
          </IconButton>
          <IconButton
            type="button"
            sx={{
              m: "10px 25px 10px 5px",
            }}
            onClick={handleClickAdd}
          >
            <AddCircleOutlinedIcon
              sx={{
                fontSize: "1.6rem",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Droppable droppableId={stack.id}>
        {(provided) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="algo-list"
          >
            {algos.map((algo, index) => (
              <AlgoCard
                key={algo.id}
                algo={algo}
                index={index}
                handleCardDelete={handleCardDelete}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default AlgoStack;
