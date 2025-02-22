import { Box, Paper, Select, MenuItem, Button, CardMedia, Grid, TextField, Typography, FormGroup, FormControlLabel, Checkbox, useTheme } from "@mui/material";
import { tokens } from "../../contexts/theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { handleHeroImagePath } from "../../heplers/image_helper";
import BackgroundPaper from "../../components/BackgroundPaper";

const Treasures = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([
    { question: "What is your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
    { question: "Which season do you prefer?", options: ["Spring", "Summer", "Fall", "Winter"] },
    { question: "What is your favorite food?", options: ["Pizza", "Burger", "Pasta", "Salad"] },
  ]);

  const handleButtonClick = () => {
    setText(`Selected: ${selectedOption}`);
  };

  return (
    <Box m="20px">
      <Header title="Treasures" subtitle="Manage your treasures" />

      
        <Grid container spacing={2}>
          {/* Left Block */}
          
          <Grid item xs={4}>
            <BackgroundPaper>
              <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <Select
                  fullWidth
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <MenuItem value={"option1"}>Option 1</MenuItem>
                  <MenuItem value={"option2"}>Option 2</MenuItem>
                  <MenuItem value={"option3"}>Option 3</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleButtonClick}>
                  Submit
                </Button>
                <TextField fullWidth value={text} InputProps={{ readOnly: true }} />
              </Box>
            </BackgroundPaper>
          </Grid>
          

          
          {/* Right Block (Twice as Wide) */}
          
          <Grid item xs={8}>
            <BackgroundPaper>
              <Box sx={{ padding: 2, height: "100%" }}>
                <Typography variant="h6">Multiple Choice Questions:</Typography>
                {questions.map((item, index) => (
                  <Box key={index}>
                    <Typography>{item.question}</Typography>
                    <FormGroup>
                      {item.options.map((option, i) => (
                        <FormControlLabel
                          key={i}
                          control={<Checkbox />}
                          label={option}
                        />
                      ))}
                    </FormGroup>
                  </Box>
                ))}
                <Button variant="contained" sx={{ marginTop: 2 }}>Submit Answers</Button>
              </Box>
            </BackgroundPaper>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Treasures;
