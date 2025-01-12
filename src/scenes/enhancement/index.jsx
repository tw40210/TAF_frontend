import { Box,  Card, CardContent, CardMedia, Grid, Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../../contexts/theme";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { AccountInfoContext } from "../../contexts/account_info";
import { handleImagePath } from "../../heplers/image_helper";

const Enhancement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accountInfoConext = useContext(AccountInfoContext);

  useEffect(() => {

  }, []);

  const currentHeros =Object.entries(accountInfoConext.accountInfo.heros);
  const [editingCard, setEditingCard] = useState(null); // Tracks the currently clicked card for inline dropdown.
  console.log("currentHeros", currentHeros)

  return (
    <Box m="20px">
      <Header title="Enhancement" subtitle="Managing your current data" />
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          padding: 3,
          borderRadius: 2,
          backgroundColor: colors.grey[800], // Light beige for a paper-like look
        }}
      >
        {/* Cards Display */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {currentHeros.map(([card_name, {card_id, _, card_level}]) => (
            <Grid item xs={12} sm={6} md={4} key={card_id}>
              <Card
                variant="outlined"
                onClick={() => setEditingCard(card_id)}
                sx={{ cursor: 'pointer' }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {card_name}
                  </Typography>
                  {editingCard === card_id ? (
                    <Typography>Selected</Typography>
                  ) : (
                    <Typography>UnSelected</Typography>
                  )}
                  <CardMedia
                    component="img"
                    height="768"
                    image={handleImagePath(card_name)}
                    alt="Example Image"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Enhancement;
