import React from 'react'
import {
  makeStyles,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core'

function Navbar() {
  return (
    <>
      <div>
        {/* <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-around", padding: "2px" }}>
          <Grid lg={2}>
            <img src={`${process.env.PUBLIC_URL}/assets/feedtablogo.png`} alt="" width="30%" />
          </Grid>
          <Grid lg={9}>
            <h5>FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP DEVELOPMENT MULTI STATE COOPERATIVE SOCIETY LTD.</h5>
          </Grid>
        </div> */}
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Departments</a>
              <a class="nav-item nav-link" href="#">Schemes</a>
            </div>
          </div>
          <div>
            <button className="btn btn-secondary mx-1">Login</button>
          </div>
        </nav> */}
      </div>
    </>
  )
}

export default Navbar
