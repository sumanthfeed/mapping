import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox, FormGroup, } from '@material-ui/core';
import { GoogleMap, useJsApiLoader, Marker, LoadScript, Polygon, useLoadScript, MarkerClusterer, } from "@react-google-maps/api";

const categoryModelOne = [
  {
    name: 'General Information',
    value: 'generalinfo',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Production of Fresh Produce',
    value: 'productionoffreshproduce',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Export to World',
    value: 'exporttoworld',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Imports from world',
    value: 'importfromworld',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Import Tarrifs',
    value: 'importtarriff',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'India trade with this country',
    value: 'indiatradewiththiscountry',
    // icon: 'fas fa-users',
  },
  {
    name: 'Import Regulations & Standards',
    value: 'importregstd',
    // icon: 'fas fa-warehouse',
  },
  {
    name: 'SPS measures',
    value: 'spsmeasures',
    // icon: 'fas fa-store',
  },
  {
    name: 'Export from India',
    value: 'exportsfromindia',
    icon: '',
  },
  {
    name: 'Market Report',
    value: 'marketreport',
  },
  {
    name: 'Embassy',
    value: 'embassy',
  },
  {
    name: 'NRI Associations',
    value: 'nriassociations'
  },
  {
    name: 'Buyer Seller Data',
    value: 'buyersellerdata'
  }
]

const useStyles = makeStyles(theme => ({
  genInfoBlock: {
    marginTop: '20px',
    borderBottom: "1px solid #d1d1d1"
  },
  freshProduceBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  exWorldBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  imWorldBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  importTarrifBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  indiaTradeBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  nriBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  buyyerSellerBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  embasyBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  spsBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  marketReportBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  exfromindiaBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  imregstdBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },

}));


const productPositions = [
  {
    lat: 16.4957,
    lng: 80.6542
  },
  {
    lat: 12.9716,
    lng: 77.5946
  },
  {
    lat: 19.7515,
    lng: 75.7139
  },

  {
    lat: 6.9271,
    lng: 79.8612
  },
  {
    lat: 35.8617,
    lng: 104.1954
  },
  {
    lat: 28.3949,
    lng: 84.1240
  },
  {
    lat: 33.9391,
    lng: 67.7100
  },
  {
    lat: 21.9162,
    lng: 95.9560
  },
  {
    lat: 15.8700,
    lng: 100.9925
  },
  {
    lat: 23.6850,
    lng: 90.3563
  },
  {
    lat: 33.2232,
    lng: 43.6793
  },
]

const buyerPositions = [
  {
    lat: 47.7511,
    lng: -120.7401
  },
  {
    lat: 23.6345,
    lng: -102.5528
  },
  {
    lat: 31.9686,
    lng: -99.9018
  },
  {
    lat: 41.8781,
    lng: -87.6298
  },
  {
    lat: 32.7767,
    lng: -96.7970
  },
  {
    lat: -33.8688,
    lng: 151.2093
  }
]

const marketPositions = [
  {
    lat: -22.328474,
    lng: 24.684866
  },
  {
    lat: 7.946527,
    lng: -1.023194
  },
  {
    lat: -11.202692,
    lng: 17.873886
  },
]
function CountryProfile() {
  const classes = useStyles();
  const [findProduct, setFindProduct] = useState({
    selectcountry: '',
  })
  const { selectcountry } = findProduct;
  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])
  const [mapData, setMapData] = useState([])
  const containerStyle = {
    margin: '20px auto',
    width: '100%',
    height: '500px',
  };
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBIHTaAXKPDfB8L80tVGf7nwOBCiGZK7zI",
  })
  const options = useMemo(() => ({
    disableDefaultUI: false,
    clickableIcons: true,
  }), [])

  const center = useMemo(() => ({
    lat: 0.0,
    lng: 0.0
  }), [])
  const onUnmount = useCallback(function callback(map) {
    setMap(map)
  }, [])
  const searchOnChange = (e) => {
    setFindProduct({ ...findProduct, [e.target.name]: [e.target.value] })
  }

  const searchFormSubmit = (e) => {
    e.preventDefault();
    console.log(findProduct)
  }
  return (
    <>
      <form onSubmit={searchFormSubmit}>
        <Grid
          container
          lg={12}
          item
          justifyContent="space-around"
          spacing={1}
        >
          <Grid lg={4} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              select
              variant="outlined"
              margin="normal"
              label="Select Country"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="selectcountry"
              value={selectcountry}
              onChange={searchOnChange}
              defaultValue='india'
            >
              <MenuItem value="india">India</MenuItem>
              <MenuItem value="america">America</MenuItem>
              <MenuItem value="australia">Australia</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <div>
          <h5>Category Selection</h5>
          <FormGroup row>
            {categoryModelOne.map((item, index) => (
              <Grid item lg={2}>
                <FormControlLabel
                  name={item.name}
                  value={item.value}
                  onChange={searchOnChange}
                  variant="outlined"
                  control={<Checkbox color="primary" />}
                  label={item.name}
                  labelPlacement="end"
                  InputLabelProps={{
                    style: {
                      fontSize: "5px"
                    }
                  }}
                />
                <i class={item.icon}></i>
              </Grid>
            ))}
          </FormGroup>
        </div>
        <Grid container justifyContent="center" style={{ marginTop: '15px' }}>
          <button className="btn btn-warning" type="submit">Search</button>
        </Grid>
      </form>
      <div>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={2}
              options={options}
              // onLoad={onLoad}
              onLoad={(map) => setMap(map)}
              onUnmount={onUnmount}
            >
              <>
                {/* Child components, such as markers, info windows, etc. */}
                {productPositions.map((item, index) => (
                  <Marker position={item} key={index} icon={`${process.env.PUBLIC_URL}/assets/mango.png`}></Marker>
                ))}
                {buyerPositions.map((item, index) => (
                  <Marker position={item} key={index} icon={`${process.env.PUBLIC_URL}/assets/buyericon.png`}></Marker>
                ))}
                {marketPositions.map((item, index) => (
                  <Marker position={item} key={index} icon={`${process.env.PUBLIC_URL}/assets/marketyard.png`}></Marker>
                ))}
              </>
            </GoogleMap>
          ) : <></>
        }
      </div>
      <div className={classes.genInfoBlock}>
        <h6>General Information</h6>
      </div>
      <div className={classes.freshProduceBlock}>
        <h6>Production of fresh produce</h6>
      </div>
      <div className={classes.exWorldBlock}>
        <h6>Exports to world</h6>
      </div>
      <div className={classes.imWorldBlock}>
        <h6>Imports to world</h6>
      </div>
      <div className={classes.importTarrifBlock}>
        <h6>Import Tariff</h6>
      </div>
      <div className={classes.indiaTradeBlock}>
        <h6>India trade with this country</h6>
      </div>
      <div className={classes.imregstdBlock}>
        <h6>Import Regulation Standards</h6>
      </div>
      <div className={classes.spsBlock}>
        <h6>SPS Measures</h6>
      </div>
      <div className={classes.exfromindiaBlock}>
        <h6>Exports from India</h6>
      </div>
      <div className={classes.marketReportBlock}>
        <h6>Market Report</h6>
      </div>
    </>
  )
}

export default CountryProfile