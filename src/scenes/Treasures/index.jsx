import { Box, Paper, Select, MenuItem, Button, CardMedia, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../contexts/theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { handleHeroImagePath } from "../../heplers/image_helper";
import BackgroundPaper from "../../components/BackgroundPaper";

const Treasures = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    // fetchMetaData(priceDataConext.setPriceMetaData);
  }, []);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`You selected: ${selectedOption}`);
  };

  return (
    <Box m="20px">
      <Header title="Treasures" subtitle="Manage your treasures" />

      <BackgroundPaper>
        {/* Cards Display */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 2,
            gap: 3,
            maxWidth: 600,
            margin: "auto",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          {/* Left Column */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Image */}
            <CardMedia
                    component="img"
                    image={handleHeroImagePath("Option 1")}
                    alt="Example Image"
                    style={{ width: '100%' }} 
                  />

            {/* Dropdown Menu */}
              <Select
                labelId="dropdown-label"
                value={selectedOption}
                onChange={handleChange}
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
                <MenuItem value="Option 3">Option 3</MenuItem>
              </Select>

            {/* Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleButtonClick}
              disabled={!selectedOption} // Disable button if no option selected
            >
              Submit
            </Button>
          </Box>

          {/* Right Column */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6">Information</Typography>
            <TextField
              multiline
              rows={10}
              variant="outlined"
              value={selectedOption ? `You selected: ${selectedOption}` : "No option selected."}
              InputProps={{ readOnly: true }}
              fullWidth
            />
          </Box>
        </Box>
      </BackgroundPaper>
    </Box>
  );
};

export default Treasures;
