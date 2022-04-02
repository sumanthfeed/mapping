import React from 'react'
import './ppProductGuide.css'
function PPProductGuide() {
  return (
    <>

      <div className='ppProductGuide'>
        <div>
          <h6 style={{color:'#d48715'}}>Product Guide</h6>
        </div>
        <div style={{display:'flex'}}>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12' style={{ border: '1px solid black' }}>
            <h6>Good Agriculture Practice</h6>
            <p>Soil Preparation<a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
            <p>Seeds<a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
            <p>Water Management <a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12' style={{ border: '1px solid black' }}>
            <h6>Processing</h6>
            <p>plant <a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
            <p>cultivation <a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
            <p>Testing <a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12' style={{ border: '1px solid black' }}>
            <h6>Product Guide</h6>
            <p>Irrigation <a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
            <p>Internal Crops <a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
            <p>Climate <a href='feedprofilebroucher.pdf' target='_blank' rel="noreferrer" download>View</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PPProductGuide