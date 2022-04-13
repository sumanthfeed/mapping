import React from 'react'
import './ppProduction.css'
import { makeStyles, Divider, } from '@material-ui/core';
import { ChildCare } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({

}));
function PPProduction(props) {
  const classes = useStyles();
  return (
    <>
      <div className='ppProductionWraper table-responsive'>
        <h6 style={{ color: '#d48715' }}>Production</h6>
        <Divider />
        <p>Country Production</p>
        <table className='table'>
          <thead>
            <tr>
              <th>Country</th>
              <th>Product</th>
              <th>Area in Ha</th>
              <th>Production</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>India</td>
              <td>
                {props.productname.map((item, index) => (
                  <>
                    <div key={index}>{item}</div>
                    <hr style={{margin:'0px',padding:'0px'}}/>
                  </>
                ))}
              </td>
              <td>
                {props.ha.map((item, index) => (
                  <>
                    <div key={index}>{item}</div>
                    <hr style={{margin:'0px',padding:'0px'}}/>
                  </>
                ))}
              </td>
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
          </tbody>
        </table>
        <small><span style={{ color: 'red' }}>Source: AgriXchange. </span>For detailed Production information <a href='https://agriexchange.apeda.gov.in/' target='_blank' rel="noreferrer">(Click here)</a></small>
      </div>
    </>
  )
}

export default PPProduction