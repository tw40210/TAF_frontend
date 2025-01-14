import React, { useState } from 'react';
import { Paper, Tabs, Tab, Typography, Box } from '@mui/material';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index} aria-labelledby={`tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const PaperTabs = () => {
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

      <TabPanel value={currentTab} index={0}>
        Content for Tab One
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        Content for Tab Two
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        Content for Tab Three
      </TabPanel>
    </Paper>
  );
}

export default PaperTabs