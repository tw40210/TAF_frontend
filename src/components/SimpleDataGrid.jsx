import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { tokens } from "../contexts/theme";
import { Box, useTheme } from "@mui/material";

const SimpleDataGrid = ({ rows, columns, components = {}, styles = {} }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        ...styles,
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
          height: "20px",
          minHeight: "20px",
          borderRadius: "0 0 5px 5px",
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        components={components}
        hideFooterRowCount
        hideFooterSelectedRowCount
        hideFooterPagination
      />
    </Box>
  );
};

export default SimpleDataGrid;
