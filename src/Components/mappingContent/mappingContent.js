import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ProductProfile from './productProfile/productProfile';
import DistrictProfile from './districtProfile/districtProfile';
import CountryProfile from './countryProfile/countryProfile';


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
          <div>{children}</div>
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
    borderRadius: '10px 10px',
    backgroundColor: 'white',
    // border: "1px solid #f0f0f0"
  },
}));

function MappingContent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
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