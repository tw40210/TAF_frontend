import React, { useState } from 'react';
import {Box, Paper, Tabs, Tab, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText, Grid, ListItemButton, Drawer, Button} from '@mui/material';
import { handleImagePath } from '../../heplers/image_helper';

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
                      image={handleImagePath(heroCharacter.name)}
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
  const listsData = [
    ["Item 1A", "Item 2A", "Item 3A"],
    ["Item 1B", "Item 2B", "Item 3B"],
    ["Item 1C", "Item 2C", "Item 3C"],
    ["Item 1D", "Item 2D", "Item 3D"],
    ["Item 1E", "Item 2E", "Item 3E"],
    ["Item 1F", "Item 2F", "Item 3F"],
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");

  const handleListItemClick = (item) => {
    setDrawerContent(item); // Set the content for the side window
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
            <CardContent>
              <Grid container spacing={4}>
                {listsData.map((list, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Typography variant="h6" align="center">
                      List {index + 1}
                    </Typography>
                    <List>
                      {list.map((item, itemIndex) => (
                        <ListItemButton
                            key={itemIndex}
                            onClick={() => handleListItemClick(item)}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Grid>
                ))}
              </Grid>
              {/* Side Drawer */}
              <Drawer
                anchor="right"
                open={drawerOpen}
                PaperProps={{
                  sx: { width: 300, padding: 2 },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Item Details
                </Typography>
                <Typography variant="body1">{drawerContent}</Typography>

              </Drawer>
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
                      image={handleImagePath(heroCharacter.name)}
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

const PaperTabs = ({ heroCharacter }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', margin: '5px auto', padding: 2 }}>
      <Tabs value={currentTab} onChange={handleTabChange} aria-label="example tabs">
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

export default PaperTabs