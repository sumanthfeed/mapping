import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
import ProductProfile from './productProfile/productProfile';
import DistrictProfile from './districtProfile/districtProfile';
import CountryProfile from './countryProfile/countryProfile';
import ProductNavbar from '../productNavbar/productNavbar';
import Worldmap from '../map/worldMap';
import ProductMapping from '../productMapping/productMapping';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  mappingContentWrap: {
    // margin: '15px 0px',
    // padding: '0px 10px',
    borderRadius: '10px 10px',
    backgroundColor: 'white',
    border: "1px solid #f0f0f0"
    // boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
    // webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
    // mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
  }
}));

function MappingContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <ProductNavbar /> */}
      {/* <ProductMapping/> */}
      {/* <Worldmap/> */}
      <div className={classes.mappingContentWrap}>

        <div>
          {/* <AppBar position="static" color="default"> */}
          <div style={{display:"flex",justifyContent:'center'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="product profile" {...a11yProps(0)} />
              <Tab label="district profile" {...a11yProps(1)} />
              <Tab label="country profile" {...a11yProps(2)} />
            </Tabs>
          </div>
          {/* </AppBar> */}
          {/* <Divider /> */}
          <hr style={{margin:'0px'}}/>
          <TabPanel value={value} index={0}>
            <ProductProfile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DistrictProfile />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CountryProfile />
          </TabPanel>
        </div>
      </div>
    </>
  )
}

export default MappingContent