import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { tokens } from "../../contexts/theme";
import { TmpScenceAlgoStackContext } from "../../contexts/algos";
import AlgoDetailOptions from "./AlgoDetailOptions";

const AlgoDetail = ({ algo, handleSave, handleCardDelete }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const localAlgoContext = useContext(TmpScenceAlgoStackContext);
  const AlgoInfo = localAlgoContext.tmpAlgoStacks.algos[algo.id];

  const [tmpAlgoInfo, setTmpAlgoInfo] = useState(AlgoInfo);

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
            <Typography variant="h4">AlgoDetail {algo.id}</Typography>
          </Box>
          <AlgoDetailOptions
            algo={algo}
            tmpAlgoInfo={tmpAlgoInfo}
            setTmpAlgoInfo={setTmpAlgoInfo}
          />
        </Box>

        <Box display="flex" alignContent="center" justifyContent="right">
          <Button
            onClick={() => handleCardDelete(algo.id)}
            variant="contained"
            sx={{
              m: "15px 22px",
              background: colors.redAccent[700],
              width: "15%",
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => handleSave(tmpAlgoInfo)}
            variant="contained"
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

export default AlgoDetail;
