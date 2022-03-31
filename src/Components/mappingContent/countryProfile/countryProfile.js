import React, { useState } from 'react'
import { Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox, FormGroup, } from '@material-ui/core';

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
function CountryProfile() {
  const classes = useStyles();
  const [findProduct, setFindProduct] = useState({
    selectcountry: '',
  })
  const { selectcountry} = findProduct;

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