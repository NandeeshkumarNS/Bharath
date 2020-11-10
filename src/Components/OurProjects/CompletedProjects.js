


import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from "./styles";
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function CompletedProjects() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        TabIndicatorProps={{
          style: {
            backgroundColor: "#F6922B",
            width: "4px",
            padding: "0px"
          }
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        style={{ width: "20%", backgroundColor: "white", height: "100vh" }}
      >
        <Tab label="House Constraction" {...a11yProps(0)} className={classes.OtherTab} />
        <Tab label="Compound Wall Constraction" {...a11yProps(1)} className={classes.OtherTab} />
        <Tab label="Commercial/Industrial Constraction" {...a11yProps(2)} className={classes.OtherTab} />
        <Tab label="Land Development" {...a11yProps(3)} className={classes.OtherTab} />
      </Tabs>
      <div style={{ width: "100%", height: "100%", backgroundColor: "#F2F2F2" }}>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
        </TabPanel>
        <TabPanel value={value} index={2}>
        </TabPanel>
        <TabPanel value={value} index={3}>
        </TabPanel>
        <TabPanel value={value} index={4}>
        </TabPanel>
      </div>
    </div>
  );
}
