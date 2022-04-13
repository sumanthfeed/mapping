import React, { useState } from 'react'
import {
  Grid,
  TextField,
  MenuItem
} from '@material-ui/core'

function ProductNavbar() {
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


  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '0px 10px', borderRadius: '10px 10px' }}>
        <form onSubmit={searchFormSubmit}>
          <Grid
            container
            lg={12}
            item
            style={{ justifyContent: "space-evenly", alignItems: 'center' }}
          >
            <Grid lg={2} md={2} sm={12} xs={12} item>
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
              />
            </Grid>
            <Grid lg={2} md={2} sm={12} xs={12} item>
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
              >
                <MenuItem value="india">India</MenuItem>
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
          <Grid container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            xs={11}>
            <button className="btn btn-outline-dark" type="submit" style={{margin:'20px 0px'}}>Submit</button>
          </Grid>
        </form>
      </div>
    </>
  )
}

export default ProductNavbar
