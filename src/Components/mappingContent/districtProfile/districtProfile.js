import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Grid, MenuItem, TextField, FormControlLabel, Checkbox, FormGroup, } from '@material-ui/core';
import { GoogleMap, useJsApiLoader, Marker, LoadScript, Polygon, useLoadScript, MarkerClusterer, } from "@react-google-maps/api";





const categoryModelOne = [
  {
    name: 'Production',
    value: 'production',
  },
  {
    name: 'Market Yard',
    value: 'marketyard',
  },
  {
    name: 'Cold Storages',
    value: 'coldstorages',
  },
  {
    name: 'Value Addition units',
    value: 'valuadditionunits',
  },
  {
    name: 'Export Star Houses',
    value: 'valuadditionunits',
  },
  {
    name: 'FPO',
    value: 'fpo',
  },
  {
    name: 'Industries',
    value: 'industries',
  },
  {
    name: 'Govt offices',
    value: 'govtoffices',
  },
  {
    name: 'DCCB / PACS',
    value: 'dccb',
    icon: '',
  },
  {
    name: 'Universities & Colleges',
    value: 'universitiescolleges',
  },
  {
    name: 'Political Picture',
    value: 'political',
  },
]

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

function DistrictProfile() {
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

  const [findProduct, setFindProduct] = useState({
    selectstate: '',
    selectdistrict: '',
  })
  const { selectstate, selectdistrict } = findProduct;

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
              label="Select State"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="selectstate"
              value={selectstate}
              onChange={searchOnChange}
            >
              <MenuItem value="electricitybill">Andhra Pradesh</MenuItem>
              <MenuItem value="waterbill">Telangana</MenuItem>
              <MenuItem value="housetax">Karnataka</MenuItem>
            </TextField>
          </Grid>
          <Grid lg={4} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              select
              variant="outlined"
              margin="normal"
              label="Select District"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="selectdistrict"
              value={selectdistrict}
              onChange={searchOnChange}
            >
              <MenuItem value="electricitybill">Krishna</MenuItem>
              <MenuItem value="waterbill">Guntur</MenuItem>
              <MenuItem value="housetax">West Godavari</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <div>
          <h5>Category Selection</h5>
          <FormGroup row>
            {categoryModelOne.map((item, index) => (
              <Grid item lg={2} key={index}>
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
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Production</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Market Yards</h6>
      </div>
      {/* <Divider/> */}
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Cold Storages</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Value Added Units</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Export Star Houses &amp; Export Companies</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Ports (sea, air)</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>FPO (product wise)</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Industries</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Govt Offices</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>DCCB's &amp; PAC's</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Universities &amp; Colleges</h6>
      </div>
      <div style={{ margin: '20px 0px', borderBottom: "1px solid #d1d1d1" }}>
        <h6>Political Picture</h6>
      </div>
    </>
  )
}

export default DistrictProfile