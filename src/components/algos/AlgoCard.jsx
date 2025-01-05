import {
  Box,
  Button,
  Card,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { tokens } from "../../contexts/theme";
import AlgoDetail from "./AlgoDetail";
import { TmpScenceAlgoStackContext } from "../../contexts/algos";

const AlgoCard = ({ algo, index, handleCardDelete }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const localAlgoContext = useContext(TmpScenceAlgoStackContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = (newAlgoInfo) => {
    const newAlgoStacks = {
      ...localAlgoContext.tmpAlgoStacks,
      algos: {
        ...localAlgoContext.tmpAlgoStacks.algos,
        [algo.id]: newAlgoInfo,
      },
    };
    localAlgoContext.setTmpAlgoStacks(newAlgoStacks);
    handleClose();
  };

  return (
    <Draggable key={algo.id} draggableId={algo.id} index={index}>
      {(provided) => (
        <Box>
          <Button
            onClick={handleClick}
            sx={{
              textAlign: "inherit", // Keeps the text alignment consistent
              padding: 0, // Removes padding to avoid button styles
              width: "100%",
            }}
          >
            <Card
              className="algo"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              sx={{
                m: "10px",
                width: "80%",
                height: "110%",
                padding: "10px",
                background: `${colors.grey[700]}`,
                textTransform: "none",
              }}
            >
              <Typography
                color={colors.grey[100]}
                variant="h4"
                fontWeight="bold"
                sx={{
                  m: "10px",
                }}
              >
                {algo.algoType}
              </Typography>
              <Typography
                color={colors.grey[200]}
                sx={{
                  m: "10px",
                }}
              >
                Type: {algo.algoType}, ID: {algo.id}
              </Typography>
            </Card>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
          >
            <AlgoDetail
              algo={algo}
              handleSave={handleSave}
              handleCardDelete={handleCardDelete}
            />
          </Popover>
        </Box>
      )}
    </Draggable>
  );
};

export default AlgoCard;
