import React from 'react'
import './ppBuyerSeller.css'
import {
  makeStyles, Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

}))
function PPBuyerSeller() {
  const classes = useStyles();
  return (
    <>
      
      <div className='ppbuyerseller'>
      <h6 style={{color:'#d48715'}}>Buyers Sellers</h6>
        <Grid style={{ overflow: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Company name</th>
                <th>Mode</th>
                <th>Authorised person</th>
                <th>Contact number</th>
                <th>Email Id</th>
                <th>Address</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>America</td>
                <td>Harrison Traders</td>
                <td>Buyer</td>
                <td>Ricky Harrison</td>
                <td>+1 2233223322</td>
                <td>harrisontrade@gmail.com</td>
                <td>California</td>
                <td>wilson port</td>
              </tr>
              <tr>
                <td>Japan</td>
                <td>ohoo Traders</td>
                <td>Seller</td>
                <td>ohoo toy</td>
                <td>+23 4453102679</td>
                <td>ohootrade@gmail.com</td>
                <td>Tokyo</td>
                <td>zim zim port</td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </div>

    </>
  )
}

export default PPBuyerSeller