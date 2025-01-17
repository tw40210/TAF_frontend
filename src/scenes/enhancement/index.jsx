import { Box,  Card, CardContent, CardMedia, Grid, Paper, Dialog, Typography, useTheme } from "@mui/material";
import { tokens } from "../../contexts/theme";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { AccountInfoContext } from "../../contexts/account_info";
import { handleImagePath } from "../../heplers/image_helper";
import PaperTabs from "../../components/enhancement/HeroEnhancementPanel";
import { heroIdMapping } from "../../data/hero_index";




















const Enhancement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accountInfoConext = useContext(AccountInfoContext);

  useEffect(() => {

  }, []);

  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClick = (id) => () => {
    setEditingCard(id)
    setTimeout(() => setOpen(true), 0);
    
  };

  const currentHeros =Object.keys(accountInfoConext.accountInfo.heros);
  const [editingCard, setEditingCard] = useState(null); // Tracks the currently clicked card for inline dropdown.
  console.log("accountInfoConext.accountInfo.heros", accountInfoConext.accountInfo.heros)

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
          {currentHeros.map((card_name) => (
            <Grid item xs={12} sm={6} md={4} key={accountInfoConext.accountInfo.heros[card_name].id}>
              <Card
                variant="outlined"
                onClick={handleCardClick(accountInfoConext.accountInfo.heros[card_name].id)}
                sx={{ cursor: 'pointer' }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {card_name}
                  </Typography>
                  {editingCard === accountInfoConext.accountInfo.heros[card_name].id ? (
                    <Typography>{accountInfoConext.accountInfo.heros[card_name].id}</Typography>
                  ) : (
                    <Typography>UnSelected</Typography>
                  )}
                  <CardMedia
                    component="img"
                    image={handleImagePath(card_name)}
                    alt="Example Image"
                    style={{ width: '100%' }} 
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
              {/* Popup Paper */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <PaperTabs heroCharacter={accountInfoConext.accountInfo.heros[heroIdMapping[editingCard]]}/>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default Enhancement;
