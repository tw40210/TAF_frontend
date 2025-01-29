import { Box,  Card, CardContent, CardMedia, Grid, Paper, Dialog, Typography, useTheme } from "@mui/material";
import { tokens } from "../../contexts/theme";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { AccountInfoContext } from "../../contexts/account_info";
import { handleHeroImagePath } from "../../heplers/image_helper";
import EnhancementHeroPopup from "../../components/enhancement/HeroEnhancementPanel";
import { heroIdMapping } from "../../data/hero_index";
import FramedImage from "../../components/FramedImage";
import BackgroundPaper from "../../components/BackgroundPaper";


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
      <BackgroundPaper>
        {/* Cards Display */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {currentHeros.map((card_name) => (
            <Grid item xs={12} sm={6} md={4} key={accountInfoConext.accountInfo.heros[card_name].id}>
              <Card
                variant="outlined"
                onClick={handleCardClick(accountInfoConext.accountInfo.heros[card_name].id)}
                sx={{ 
                  cursor: 'pointer',
                  backgroundColor: 'transparent', }}
              >
                <FramedImage imagePath={handleHeroImagePath(card_name)}  />
              </Card>
            </Grid>
          ))}
        </Grid>
              {/* Popup Paper */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <EnhancementHeroPopup heroCharacter={accountInfoConext.accountInfo.heros[heroIdMapping[editingCard]]}/>
        </Dialog>
      </BackgroundPaper>
    </Box>
  );
};

export default Enhancement;
