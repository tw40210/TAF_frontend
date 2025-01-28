import React, { useState } from 'react';
import {useTheme, MenuItem, Select, Box, Paper, Tabs, Tab, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText, Grid, ListItemButton} from '@mui/material';
import { handleHeroImagePath } from '../../heplers/image_helper';
import { traitIdMapping } from '../../data/trait_index';
import { itemIdMapping } from '../../data/item_index';
import { tokens } from "../../contexts/theme";

const MainCharPanel = ({heroCharacter, value, index }) => {
  return (
    <Box role="tabpanel" hidden={value !== index} aria-labelledby={`tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>index {index}</Typography>
          <Card
                variant="outlined"
              >

            <CardContent
            sx={{ display: 'flex', flexDirection: 'row'}}>
              <CardMedia
                      component="img"                    
                      image={handleHeroImagePath(heroCharacter.name)}
                      alt="Example Image"
                      style={{ width: '25%' }} 
                    /> 
              <List>
                <ListItem>
                  <ListItemText primary={`Id: ${heroCharacter.id}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Name: ${heroCharacter.name}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Level: ${heroCharacter.level}`} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
              
        </Box>
      )}
    </Box>
  );
}

const EnhancementPanel = ({heroCharacter, value, index }) => {
  // const listsData = [
  //   ["Item 1A", "Item 2A", "Item 3A"],
  //   ["Item 1B", "Item 2B", "Item 3B"],
  //   ["Item 1C", "Item 2C", "Item 3C"],
  //   ["Item 1D", "Item 2D", "Item 3D"],
  //   ["Item 1E", "Item 2E", "Item 3E"],
  //   ["Item 1F", "Item 2F", "Item 3F"],
  // ];
  const currentHeroCharacterSetsKeys= Object.keys(heroCharacter.heroTraitSets)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSetKey, setDrawerSetKey] = useState("");
  const [drawerTraitKey, setDrawerTraitKey] = useState("");
  const [drawerItemId, setDrawerItemId] = useState(Object.keys(heroCharacter.itemSet)[0] ?? -1);
  const handleSelectChange = (event) =>{
    setDrawerItemId(event.target.value)
  }
  console.log("drawerItemId", drawerItemId)
  

  const handleDrawerContent = ()=>{

    if(drawerSetKey!=="" && drawerTraitKey!==""){
      return (<Box>
                <Typography variant="h6" gutterBottom>
                Item Details <br />
                name: {traitIdMapping[heroCharacter.heroTraitSets[drawerSetKey][drawerTraitKey].trait_id].name} <br />
                level: {heroCharacter.heroTraitSets[drawerSetKey][drawerTraitKey].trait_level} <br />
                using item : {drawerItemId}
                </Typography>
                <Select
                  value={drawerItemId}
                  onChange={handleSelectChange}
                  fullWidth
                  autoFocus
                  sx={{
                    color: colors.primary[100], // Text color of the selected value
                    ".MuiSelect-icon": {
                      color: colors.primary[100], // Color of the dropdown arrow
                    }
                  }}
                >
                  {Object.keys(heroCharacter.itemSet).map((itemId, index) => ( 
                    <MenuItem value={itemId} key={index}>
                      {itemIdMapping[itemId].name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

        
      )
    }else{
      return (
        <Box>
          <Typography variant="h6" gutterBottom>
          No item selected
          </Typography>
        </Box>

      )
    }
  }

  const handleListItemClick = (setKey, traitKey) => {
    setDrawerSetKey(setKey)
    setDrawerTraitKey(traitKey)
    setDrawerOpen(true); // Open the side window
  };
  return (
    <Box role="tabpanel" hidden={value !== index} aria-labelledby={`tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>index {index}</Typography>
          <Card
                variant="outlined"
              >
            <CardContent sx={{ display: "flex", height: "100%" }}>
              <Grid container spacing={4}>
                {currentHeroCharacterSetsKeys.map((setKey, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Typography variant="h6" align="center">
                      {setKey} {index + 1}
                    </Typography>
                    <List>
                      {Object.keys(heroCharacter.heroTraitSets[setKey]).map((traitKey, itemIndex) => (
                        <ListItemButton
                            key={itemIndex}
                            onClick={() => handleListItemClick(setKey, traitKey)}
                        >
                          <ListItemText primary={traitIdMapping[heroCharacter.heroTraitSets[setKey][traitKey].trait_id].name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Grid>
                ))}
              </Grid>
              {/* Side Drawer */}
              <Box
                sx={{
                  width: 300,
                  borderLeft: "1px solid #ddd",
                  padding: 2
                }}
              >
                {handleDrawerContent()}
              </Box>
            </CardContent>
          </Card>
              
        </Box>
      )}
    </Box>
  );
}

const DisplayPanel = ({heroCharacter, value, index }) => {
  return (
    <Box role="tabpanel" hidden={value !== index} aria-labelledby={`tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>index {index}</Typography>
          <Card
                variant="outlined"
              >
            <CardContent>
              <CardMedia
                      component="img"                    
                      image={handleHeroImagePath(heroCharacter.name)}
                      alt="Example Image"
                      style={{ width: '25%' }} 
                    />
            </CardContent>
          </Card>
              
        </Box>
      )}
    </Box>
  );
}

const EnhancementHeroPopup = ({ heroCharacter }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', margin: '5px auto', padding: 2 }}>
      <Tabs value={currentTab} onChange={handleTabChange} aria-label="example tabs" 
      sx={{
        '& .MuiTab-root': { color: colors.grey[400] }, // Default color for tabs
        '& .Mui-selected': { color: colors.greenAccent[400] }, // Color for the selected tab
        '& .MuiTabs-indicator': { backgroundColor: colors.greenAccent[400] }, // Indicator color
      }}>
        <Tab label="Tab One" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Tab Two" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Tab Three" id="tab-2" aria-controls="tabpanel-2" />
      </Tabs>

      <MainCharPanel heroCharacter={heroCharacter} value={currentTab} index={0}/>
      <EnhancementPanel heroCharacter={heroCharacter} value={currentTab} index={1}/>
      <DisplayPanel heroCharacter={heroCharacter} value={currentTab} index={2}/>
    </Paper>
  );
}

export default EnhancementHeroPopup