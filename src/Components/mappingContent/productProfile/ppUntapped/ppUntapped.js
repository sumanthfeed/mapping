import React from 'react'
import './ppUntapped.css'

function PPUntapped() {
  return (
    <>
      
      <div className='ppUntapped' style={{  padding: '10px 15px',margin:'15px 0px', boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.75)', borderRadius: '10px 10px' }}>
      <h6 style={{color:'#d48715'}}>Untapped</h6>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Value in cr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Export Potential</td>
              <td>153</td>
            </tr>
            <tr>
              <td>Actual Export</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Untapped Potential</td>
              <td>53</td>
            </tr>
            <tr>
              <td>World Import</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>
        <small><span style={{ color: 'red' }}>Source: ITC. </span>For detailed Production information <a href='https://exportpotential.intracen.org/en/' target='_blank' rel="noreferrer">(Click here)</a></small>
      </div>
    </>
  )
}

export default PPUntapped