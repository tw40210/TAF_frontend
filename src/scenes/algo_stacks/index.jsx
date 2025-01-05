import { Box, useTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { tokens } from "../../contexts/theme";
import AlgoStack from "../../components/algos/AlgoStack";
import { AlgoContext, TmpScenceAlgoStackContext } from "../../contexts/algos";
import Header from "../../components/Header";
import AlgoInfo from "../../components/algos/AlgoInfo";

const AlgoStacks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const globalAlgoContext = useContext(AlgoContext);
  const localAlgoContext = useContext(TmpScenceAlgoStackContext);

  const [stackSelected, setStackSelected] = useState(
    globalAlgoContext.algoStacks.stackOrder[0]
  );

  useEffect(() => {
    localAlgoContext.setTmpAlgoStacks(globalAlgoContext.algoStacks);

    if (!(stackSelected in globalAlgoContext.algoStacks.algoStackInfo)) {
      setStackSelected(globalAlgoContext.algoStacks.stackOrder[0]);
    }
  }, [globalAlgoContext.algoStacks]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start =
      localAlgoContext.tmpAlgoStacks.algoStackInfo[source.droppableId];
    const finish =
      localAlgoContext.tmpAlgoStacks.algoStackInfo[destination.droppableId];

    if (start === finish) {
      const newAlgoIds = Array.from(start.algoIds);
      newAlgoIds.splice(source.index, 1);
      newAlgoIds.splice(destination.index, 0, draggableId);

      const newAlgoStackInfo = {
        ...start,
        algoIds: newAlgoIds,
      };

      const newState = {
        ...localAlgoContext.tmpAlgoStacks,
        algoStackInfo: {
          ...localAlgoContext.tmpAlgoStacks.algoStackInfo,
          [newAlgoStackInfo.id]: newAlgoStackInfo,
        },
      };

      localAlgoContext.setTmpAlgoStacks(newState);
      return;
    }

    const startAlgoIds = Array.from(start.algoIds);
    startAlgoIds.splice(source.index, 1);
    const newStart = {
      ...start,
      algoIds: startAlgoIds,
    };

    const finishAlgoIds = Array.from(finish.algoIds);
    finishAlgoIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      algoIds: finishAlgoIds,
    };

    const newState = {
      ...localAlgoContext.tmpAlgoStacks,
      algoStackInfo: {
        ...localAlgoContext.tmpAlgoStacks.algoStackInfo,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    localAlgoContext.setTmpAlgoStacks(newState);
  };

  return (
    <Box m="20px">
      <Header
        title="Algo Stacks"
        subtitle="Create your own trading algorithms"
      />

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{ width: "100%" }}
      >
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          paddingBottom="20px"
          m="10px"
          borderRadius="5px"
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <AlgoStack stackId={stackSelected} />
          </DragDropContext>
        </Box>
        <Box gridColumn="span 6" m="10px" borderRadius="5px">
          <AlgoInfo setStackSelected={setStackSelected} />
        </Box>
      </Box>
    </Box>
  );
};

export default AlgoStacks;
