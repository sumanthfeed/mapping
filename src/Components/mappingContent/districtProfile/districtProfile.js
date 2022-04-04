import React,{useState} from 'react'
import {  Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox, FormGroup, } from '@material-ui/core';

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

function DistrictProfile() {

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