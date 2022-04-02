import React from 'react'
import './ppVau.css'

function PPVau() {
  return (
    <>

      <div className='ppVau'>
        <h6 style={{color:'#d48715'}}>Value Addition Units</h6>
        <table>
          <thead>
            <tr>
              <th>State Name</th>
              <th>District Name</th>
              <th>Unit name</th>
              <th>value added products</th>
              <th>Address</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Andhra pradesh</td>
              <td>Krishna</td>
              <td>Mama Mango unit</td>
              <td>Mango</td>
              <td>Vijayawada</td>
              <td>9988774455</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PPVau