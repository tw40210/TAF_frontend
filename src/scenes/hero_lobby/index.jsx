import { Box, Tabs, Tab, Card, CardContent, CardMedia, Grid, Paper, Typography, Select, MenuItem, useTheme } from "@mui/material";
import { tokens } from "../../contexts/theme";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { PriceDataContext } from "../../contexts/price_data";
import { initPartySets } from "../../data/initData";
import { AccountInfoContext } from "../../contexts/account_info";
import { heroIdMappingRev } from "../../data/hero_index";



const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];


const HeroLobby = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accountInfoConext = useContext(AccountInfoContext);
  const setMap = {
    0:"set1",
    1:"set2"
  }

  useEffect(() => {
    // fetchMetaData(priceDataConext.setPriceMetaData);
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  // const [selectedCards, setSelectedCards] = useState(
  //   structuredClone(accountInfoConext.accountInfo.party_sets.set1) //use info form in select
  // );
  const set_key = setMap[activeTab]
  const selectedCards = accountInfoConext.accountInfo.party_sets[set_key]
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

  console.log("selectedCards",selectedCards)

  const currentSet =Object.entries(accountInfoConext.accountInfo.party_sets[set_key]);
  console.log("currentSet",currentSet)
  
  return (
    <Box m="20px">
      <Header title="Hero Lobby" subtitle="Managing your current data" />
        <Paper
        elevation={3}
        sx={{
          width: '100%',
          padding: 3,
          borderRadius: 2,
          backgroundColor: colors.grey[800], // Light beige for a paper-like look
        }}
      >
        {/* Tabs for Switching Card Sets */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Set 1" />
          <Tab label="Set 2" />
        </Tabs>

        {/* Cards Display */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {currentSet.map(([card_id, card_name]) => (
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
                    <Select
                      value={card_name}
                      onChange={(event) => handleSelectChange(card_id, event.target.value)}
                      fullWidth
                      autoFocus
                    >
                      {options.map((option, index) => (
                        <MenuItem value={option} key={index}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    <Typography />
                  )}
                  <CardMedia
                    component="img"
                    height="768"
                    image={`/assets/images/heros/${heroIdMappingRev[card_name]}/full_body.png`}
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

export default HeroLobby;
