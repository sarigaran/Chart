import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicGrid() {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  return (
    <Card >
    <Box sx={{ flexGrow: 1 }}>
        
       
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>this is grid<br></br>
          The Ignite UI for React Data Table / Data Grid is <br></br>
          a tabular React grid component that allows you to quickly<br></br>
           bind and display your data with little coding or configuration.<br></br>
            Features of the React data grid include filtering, sorting,<br></br>
             templates, row selection, row grouping, row pinning <br></br>
             and movable columns.<br></br>
              The React tables are optimized for live,<br></br>
               streaming data, with the ability<br></br>
                to handle unlimited data set size <br></br>
                in number of rows or columns.<br></br>
          </Item>
        </Grid>
        <Grid item xs={4}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="4" />
            <Tab label="Item Two" value="5" />
            <Tab label="Item Three" value="6" />
          </TabList>
        </Box>
        <TabPanel value="4">This is the Item One</TabPanel>
        <TabPanel value="5">This is the Item Two</TabPanel>
        <TabPanel value="6">This is the Item Three</TabPanel>
      </TabContext>
    </Box>
    
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">This is the Item One</TabPanel>
        <TabPanel value="2">This is the Item Two</TabPanel>
        <TabPanel value="3">This is the Item Three</TabPanel>
      </TabContext>
    </Box>
        </Grid>
      </Grid>
     
    </Box>
    </Card>
  );
}
