import React from 'react'
import './ppByProducts.css'

function PPByProducts() {
  return (
    <>
    
      <div className='ppByproduct' style={{ padding: '10px 15px',margin:'15px 0px', boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.75)', borderRadius: '10px 10px'  }}>
      <h6 style={{color:'#d48715'}}>By - Products</h6>
        <table>
          <thead>
            <tr>
              <th>By product Name</th>
              <th>HSN Code</th>
              <th>Exports in cr</th>
              <th>Imports in cr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mango pulp</td>
              <td>0123</td>
              <td>1233</td>
              <td>234</td>
            </tr>
            <tr>
              <td>Mango Juice</td>
              <td>0124</td>
              <td>2794</td>
              <td>762</td>
            </tr>
            <tr>
              <td>Mango Pickle</td>
              <td>0553</td>
              <td>558</td>
              <td>70</td>
            </tr>
          </tbody>
        </table>
        <small><span style={{color:'red'}}>Source: Ministry of Commerce.</span> For Export, Import, Domestic Trade Values <a href='https://commerce.gov.in/' target='_blank' rel="noreferrer">(Click here)</a></small>
      </div>
    </>
  )
}

export default PPByProducts