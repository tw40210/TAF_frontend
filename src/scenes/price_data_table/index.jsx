import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../contexts/theme";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { PriceDataContext } from "../../contexts/price_data";
import { fetchMetaData } from "../../actions/backend";

const PriceDataTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const priceDataConext = useContext(PriceDataContext);

  useEffect(() => {
    fetchMetaData(priceDataConext.setPriceMetaData);
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "start_date",
      headerName: "Start Date",
      flex: 1,
    },
    {
      field: "end_date",
      headerName: "End Date",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Data Type",
      flex: 1,
      renderCell: ({ row: { type } }) => {
        return (
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              width="40%"
              m="0 15px"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                type === "Stock"
                  ? colors.greenAccent[600]
                  : type === "Crypto"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
              }
              borderRadius="4px"
            >
              <Typography color={colors.grey[100]}>{type}</Typography>
            </Box>
            <IconButton type="button" sx={{ p: 1 }}>
              <DeleteForeverOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ p: 1 }}>
              <UpdateOutlinedIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Current Data" subtitle="Managing your current data" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
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
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={priceDataConext.priceMetaData}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default PriceDataTable;
