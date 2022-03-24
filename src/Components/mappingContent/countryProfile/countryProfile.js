import React from 'react'
import { Divider, Grid, MenuItem, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
function CountryProfile() {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>General Information</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>Production of fresh produce</h6>
      </div>
      {/* <Divider/> */}
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>Exports to world</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>Imports to world</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>Import Tariff</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>India trade with this country</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>Import Regulation Standards</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>SPS Measures</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>Exports from India</h6>
      </div>
      <div style={{ margin: '20px 0px',borderBottom: "1px solid #d1d1d1" }}>
        <h6>Market Report</h6>
      </div>
    </>
  )
}

export default CountryProfile