import React from 'react'
import './ppProduction.css'
import { Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox, FormGroup, Divider, } from '@material-ui/core';
import { ChildCare } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({

}));
function PPProduction() {
  const classes = useStyles();
  return (
    <>
      <div className='ppProductionWraper'>
        <h6 style={{color:'#d48715'}}>Production</h6>
        <Divider/>
        <p>Country Production</p>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Area in Ha</th>
              <th>Production</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>India</td>
              <td>100</td>
              <td>1500</td>
            </tr>
          </tbody>
        </table>
        <p>State Wise Production</p>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Area in HA</th>
              <th>Production</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Andhra Pradesh</td>
              <td>100</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Telangana</td>
              <td>150</td>
              <td>2500</td>
            </tr>
            <tr>
              <td>Tamil Nadu</td>
              <td>200</td>
              <td>3000</td>
            </tr>
          </tbody>
        </table>
        <p>District Wise Production</p>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>District</th>
              <th>Area in HA</th>
              <th>Production</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Andhra Pradesh</td>
              <td>Krishna</td>
              <td>100</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Telangana</td>
              <td>Hyderabad</td>
              <td>150</td>
              <td>2500</td>
            </tr>
            <tr>
              <td>Tamil Nadu</td>
              <td>Chennai</td>
              <td>200</td>
              <td>3000</td>
            </tr>
          </tbody>
        </table>
        <small><span style={{ color: 'red' }}>Source: AgriXchange. </span>For detailed Production information <a href='https://agriexchange.apeda.gov.in/' target='_blank' rel="noreferrer">(Click here)</a></small>
      </div>
    </>
  )
}

export default PPProduction