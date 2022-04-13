import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import axios from 'axios'
import { Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox, FormGroup, ListItem, ListItemText,Select,OutlinedInput } from '@material-ui/core';
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import PieChart from '../../analytics/pieChart/pieChart';
import { GoogleMap, useJsApiLoader, Marker, LoadScript, Polygon, useLoadScript } from "@react-google-maps/api";
import PPProduction from './ppProduction/ppProduction';
import PPUntapped from './ppUntapped/ppUntapped';
import PPByProducts from './ppByProducts/ppByProducts';
import PPVau from './ppVau/ppVau';
import PPBuyerSeller from './ppBuyerSeller/ppBuyerSeller';
import PPSchemesPolicies from './ppSchemesPolicies/ppSchemesPolicies';
import PPProductGuide from './ppProductGuide/ppProductGuide';
// import OutlinedInput from '@mui/material/OutlinedInput';

require('es6-promise').polyfill()
require('isomorphic-fetch')

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
    borderBottom: "1px solid #d1d1d1",

  },
  tradeBlock: {
    marginTop: '20px',
    borderBottom: "1px solid #d1d1d1",
    padding: '0px 15px'
  },
  untappedBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1",
    padding: '0px 15px'
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

const countriesData = [
  {
    name: "Germany",
    states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
  },
  {
    name: "India",
    states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"]
  },
  {
    name: "France",
    states: ["Auvergne", "Bretagne", "Corse", "Centre"]
  }
];

function ProductProfile() {
  const classes = useStyles();

  // const [{ country, state }, setData] = useState({
  //   country: "Germany",
  //   state: ""
  // });



  // function handleCountryChange(event) {
  //   setData(data => ({ state: '', country: event.target.value }));
  // }

  // function handleStateChange(event) {
  //   setData(data => ({ ...data, state: event.target.value }));
  // }


  const [findProduct, setFindProduct] = useState({
    productname: '',
    hscode: '',
    exportercountry: '',
    country: '',
    state: '',
    selectdistrict: '',
  })
  const [mapData, setMapData] = useState([])

  const { productname, hscode, exportercountry, country, state, selectdistrict } = findProduct;



  const countries = countriesData.map((country) => (
    <MenuItem key={country.name} value={country.name}>
      {country.name}
    </MenuItem>
  ));

  const states = countriesData.find((country) => country === country.name)?.states.map((state) => (
    <MenuItem key={state} value={state}>
      {state}
    </MenuItem>
  ));

  const searchOnChange = (e) => {
    setFindProduct({ ...findProduct, [e.target.name]: [e.target.value] });
    // setData(data => ({ state: '', country: e.target.value }));
    // setData(data => ({ ...data, state: e.target.value }));
  }

  const SearchFormSubmit = (e) => {
    e.preventDefault();
    console.log(findProduct)
    useEffect(() => {
      fetch('http://localhost:5000/auth/getproduct')
        .then(response => response.json())
        .then((json) => setMapData(json)).then((json) => console.log(json))
    }, [])
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


  // function ShowData (){
  //   useEffect(() => {
  //     fetch('http://localhost:5000/auth/getproduct')
  //       .then(response => response.json())
  //       .then((json) => setMapData(json)).then((json) => console.log(json))
  //   }, [])
  // }

  // const handleClick = () => {
  //   fetch('http://localhost:5000/auth/getallproducts', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }

  //   })
  //     .then(response => response.json())
  //     .then((json) => setMapData(json))
  // }
  // const [selected, setSelected] = useState("");
  // const changeHandler = e => {
  //   setSelected(e.target.value);
  // };



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

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  // mapData.map((item, index) => (
  //   product = {item.productname}
  // ))

  const product = mapData.map(item => item.productname)
  const ha = mapData.map(item => item.hscode)
  console.log(product)
  const filterOptions = createFilterOptions({
    stringify: ({ firstName, lastName, hsncode }) => `${firstName} ${lastName} ${hsncode}`
  });
  const students = [
    {
      hsncode: `01234`,
      firstName: "Mango",
      lastName: "One"
    },
    {
      hsncode: `02345`,
      firstName: "Apple",
      lastName: "Two"
    },
    {
      hsncode: `03456`,
      firstName: "Banana",
      lastName: "Three"
    }
  ];
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
      {/* {mapData.map((item, index) => (
        <div key={index}>
          <li>{item.productname}</li>
          <li>{item.hscode}</li>
        </div>
      ))} */}
      <form onSubmit={SearchFormSubmit}>
        <Grid
          container
          lg={12}
          item
          justifyContent="space-between"
          spacing={1}
        >
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <Autocomplete
              options={students}
              onInputChange={(event) => event.target}
              filterOptions={filterOptions}
              getOptionLabel={({ firstName }) => {
                return ` ${firstName}`;
              }}
              filterSelectedOptions
              renderOption={({ firstName, hsncode }) => {
                return (
                  <>
                    {`${hsncode}`} {`${firstName} `}
                  </>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  margin="normal"
                  name='productname'
                  label="Product / Hsn code"
                />
              )}
            />
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              select
              variant="outlined"
              margin="normal"
              label="Exporter"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="exportercountry"
              value={exportercountry}
              onChange={searchOnChange}
            // defaultValue='india'
            >
              <MenuItem value='india'>India</MenuItem>
            </TextField>
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              select
              variant="outlined"
              margin="normal"
              label="Importer"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="country"
              value={country}
              onChange={searchOnChange}
            // defaultValue='india'
            >

              {countries}
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
              name="state"
              value={state}
              onChange={searchOnChange}
            >
              {states}
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
        <Grid container justifyContent="center" style={{ marginTop: '15px' }}>
          <button className="btn btn-warning" type="submit">Search</button>
        </Grid>
        <div>
          <label>Category Filters</label>
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
                />
              </Grid>
            ))}
          </FormGroup>
        </div>
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
              Child components, such as markers, info windows, etc.
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
      {/* <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        size='small'
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        style={{width:'250px'}}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select> */}
      {/* <button onClick={handleClick}>click</button> */}
      <PPProduction productname={product} ha={ha} />
      <div style={{ padding: '10px 15px', margin: '15px 0px', boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.75)', borderRadius: '10px 10px' }}>
        <h6>Trade</h6>
        <small><span style={{ color: 'red' }}>Source: Ministry of Commerce.</span> For Export, Import, Domestic Trade Values <a href='https://commerce.gov.in/' target='_blank' rel="noreferrer">(Click here)</a></small>
      </div>
      <PPUntapped />
      <PPByProducts />
      <PPVau />

      {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Grid lg={5} md={12} sm={12} xs={12} item style={{ border: "2px solid grey", borderRadius: "10px 10px", padding: '5px' }}>
            <h6 style={{ fontSize: '14px' }}>Buyers</h6>
            <PieChart />
          </Grid>
          <Grid lg={5} md={12} sm={12} xs={12} item style={{ border: "2px solid grey", borderRadius: "10px 10px", padding: '5px' }}>
            <h6 style={{ fontSize: '14px' }}>Sellers</h6>
            <PieChart />
          </Grid>
        </div> */}
      <PPBuyerSeller />
      <PPSchemesPolicies />
      <PPProductGuide />
      {/* <div className={classes.footPrintBlock}>
        <h6 style={{ color: '#d48715' }}>Foot Print</h6>
      </div>
      <div className={classes.eximDocsBlock}>
        <h6 style={{ color: '#d48715' }}>Exim Documentation</h6>
      </div> */}
    </>
  )
}

export default ProductProfile