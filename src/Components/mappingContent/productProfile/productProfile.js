import React, { useState, useMemo, useRef, useCallback } from 'react'
import { Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox,  FormGroup, } from '@material-ui/core';
import PieChart from '../../analytics/pieChart/pieChart';
import { GoogleMap, useJsApiLoader, Marker, LoadScript, Polygon,useLoadScript } from "@react-google-maps/api";

const district = [
  {
    name: 'ap',
    code: ''
  },
  {
    name: 'ts',
    code: ''
  }
]
const useStyles = makeStyles(theme => ({
  productionBlock: {
    marginTop: '20px',
    borderBottom: "1px solid #d1d1d1"
  },
  tradeBlock: {
    marginTop: '20px',
    borderBottom: "1px solid #d1d1d1"
  },
  untappedBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  byProductsBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  vauBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  buyersSellersBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  schemesPoliciesBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  productGuideBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  footPrintBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  eximDocsBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },

}));

const categoryModelOne = [
  {
    name: 'Production',
    value: 'production',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Trade',
    value: 'trade',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Untapped',
    value: 'untapped',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'By - Products',
    value: 'production',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'FPO',
    value: 'fpo',
    // icon: 'fas fa-users',
  },
  {
    name: 'Value Added Units',
    value: 'vad',
    // icon: 'fas fa-warehouse',
  },
  {
    name: 'Market Yards',
    value: 'marketYards',
    // icon: 'fas fa-store',
  },
  {
    name: 'Sellers / Exporters',
    value: 'sellersExporters',
    icon: '',
  },
  {
    name: 'Buyers / Impoters',
    value: 'buyersImporters',
  },
  {
    name: 'Schemes & policies',
    value: 'Schemes & policies',
  },
  {
    name: 'Exim Documentation',
    value: 'Exim Documentation',
  },
  {
    name: 'Packing Guide',
    value: 'Packing Guide',
  },
  {
    name: 'Domestic Market',
    value: 'Domestic Market',
  },
  {
    name: 'World Top 10 Importing Countries',
    value: 'World top 10 Importing Countries',
  },
  {
    name: 'World Top 10 Exporting Countries',
    value: 'World Top 10 exporting countries',
  },
  {
    name: 'Top 10 Importing Countries from India',
    value: 'top 10 Importing countries from India',
  },
  {
    name: 'Top 10 Exporting Countries to India',
    value: 'top 10 exporting countries to India',
  },
]

const containerStyle = {
  margin: '20px auto',
  width: '100%',
  height: '500px',
};

// const center = {
//   lat: 20.5937,
//   lng: 78.9629
// };



function ProductProfile() {
  const classes = useStyles();
  


  const [findProduct, setFindProduct] = useState({
    productname: '',
    hscode: '',
    selectcountry: '',
    selectstate: '',
    selectdistrict: '',
  })
  const { productname, hscode, selectcountry, selectstate, selectdistrict } = findProduct;

  const searchOnChange = (e) => {
    setFindProduct({ ...findProduct, [e.target.name]: [e.target.value] })
  }

  const searchFormSubmit = (e) => {
    e.preventDefault();
    console.log(findProduct)
  }

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB0sR0nQ1Gc4vghLJ-qnEgKlCpwhSxC9zY",
  })
  const [map, setMap] = useState(null)
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const options = useMemo(() => ({
    disableDefaultUI: false,
    clickableIcons: true,
  }), [])

  const center = useMemo(() => ({
      lat: 20.5937,
      lng: 78.9629
  }), [])
  const onUnmount = useCallback(function callback(map) {
    setMap(map)
  }, [])


  // const mapRef = new window.google.maps.current.panTo(position)

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
  return (
    <>
      <form onSubmit={searchFormSubmit}>
        <Grid
          container
          lg={12}
          item
          justifyContent="space-between"
          spacing={1}
        >
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              type="text"
              size="small"
              variant="outlined"
              label="Product Name"
              placeholder="Product Name"
              name="productname"
              value={productname}
              onChange={searchOnChange}
              margin="normal"
              style={{ backgroundColor: 'white' }}
              InputLabelProps={{
                style: {
                  color: 'black',
                }
              }}
            />
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              type="text"
              size="small"
              variant="outlined"
              label="HS Code"
              placeholder="HS Code"
              name="hscode"
              value={hscode}
              onChange={searchOnChange}
              margin="normal"
              style={{ backgroundColor: 'white' }}
              InputLabelProps={{
                style: {
                  color: 'black',
                }
              }}
            />
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
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
              {/* <MenuItem value="america">America</MenuItem>
              <MenuItem value="australia">Australia</MenuItem> */}
            </TextField>
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
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
          <Grid lg={2} md={3} sm={12} xs={12} item>
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
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={options}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <>
              { /* Child components, such as markers, info windows, etc. */}
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
      <div className={classes.productionBlock}>
        <h6>Production</h6>
      </div>
      <div className={classes.tradeBlock}>
        <h6>Trade</h6>
      </div>
      <div className={classes.untappedBlock}>
        <h6>Untapped</h6>
      </div>
      <div className={classes.byProductsBlock}>
        <h6>By - Products</h6>
      </div>
      <div className={classes.vauBlock}>
        <h6>Value Addition Units</h6>
      </div>
      <div className={classes.buyersSellersBlock}>
        <h6>Buyers Sellers</h6>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Grid lg={5} md={12} sm={12} xs={12} item style={{ border: "2px solid grey", borderRadius: "10px 10px", padding: '5px' }}>
            <h6 style={{ fontSize: '14px' }}>Buyers</h6>
            <PieChart />
          </Grid>
          <Grid lg={5} md={12} sm={12} xs={12} item style={{ border: "2px solid grey", borderRadius: "10px 10px", padding: '5px' }}>
            <h6 style={{ fontSize: '14px' }}>Sellers</h6>
            <PieChart />
          </Grid>
        </div>
      </div>
      <div className={classes.schemesPoliciesBlock}>
        <h6>Schemes &amp; Policies</h6>
      </div>
      <div className={classes.productGuideBlock}>
        <h6>Product Guide</h6>
      </div>
      <div className={classes.footPrintBlock}>
        <h6>Foot Print</h6>
      </div>
      <div className={classes.eximDocsBlock}>
        <h6>Exim Documentation</h6>
      </div>
    </>
  )
}

export default ProductProfile