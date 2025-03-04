import { Box, Tabs, Tab, Card, CardContent, Grid, Paper, Typography, Select, MenuItem, useTheme } from "@mui/material";
import { tokens } from "../../contexts/theme";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { AccountInfoContext } from "../../contexts/account_info";
import { noObjectStr } from "../../data/constants";
import { handleHeroImagePath } from "../../heplers/image_helper";
import FramedImage from "../../components/FramedImage";
import BackgroundPaper from "../../components/BackgroundPaper";
import { GetTagsStyleObj } from "../../contexts/component_sx";



const options = [noObjectStr, 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

const HeroLobby = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accountInfoConext = useContext(AccountInfoContext);
  const setMap = {
    0:"set1",
    1:"set2"
  }

  useEffect(() => {
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const set_key = setMap[activeTab]
  const [editingCard, setEditingCard] = useState(null); // Tracks the currently clicked card for inline dropdown.

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (cardId, value) => {
    accountInfoConext.setAccountInfo({
      ...accountInfoConext.accountInfo,
      party_sets:{
        ...accountInfoConext.accountInfo.party_sets,
        [set_key]:{
          ...accountInfoConext.accountInfo.party_sets[set_key],
          [cardId]: value
        }

      }
    })
    console.log("accountInfoConext.accountInfo", accountInfoConext.accountInfo)
    setTimeout(() => setEditingCard(null), 0); // Close the dropdown after selection. Defer the state change.
  };

  const currentSet =Object.entries(accountInfoConext.accountInfo.party_sets[set_key]);
  const selectedSet = new Set(currentSet.map(x => x[1]))

  return (
    <Box m="20px">
      <Header title="Hero Lobby" subtitle="Managing your current data" />
      <BackgroundPaper>
        {/* Tabs for Switching Card Sets */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={GetTagsStyleObj(colors)}
        >
          <Tab label="Set 1" />
          <Tab label="Set 2" />
        </Tabs>

        {/* Cards Display */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {currentSet.map(([card_id, card_name]) => (
            <Grid item xs={12} sm={6} md={4} key={card_id}>
              <Card
                // variant="outlined"
                onClick={() => setEditingCard(card_id)}
                sx={{ 
                  cursor: 'pointer',
                  backgroundColor: 'transparent', }}
              >
                <FramedImage imagePath={handleHeroImagePath(card_name)}  />
                {editingCard === card_id ? (
                  <Select
                    value={card_name}
                    onChange={(event) => handleSelectChange(card_id, event.target.value)}
                    fullWidth
                    autoFocus
                  >
                    {options.map((option, index) => (((!selectedSet.has(option))|| (option === card_name)) || option ===noObjectStr ? 
                      (
                        
                        <MenuItem value={option} key={index}>
                          {option}
                        </MenuItem>
                      ) : 
                      null
                    ))}
                  </Select>
                ) : (
                  <Typography />
                )}
                  

              </Card>
            </Grid>
          ))}
        </Grid>
      </BackgroundPaper>
    </Box>
  );
};

export default HeroLobby;
