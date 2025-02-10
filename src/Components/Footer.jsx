import React from 'react'
import "./Footer.css"
import qrcode from "../assets/qrcode.png";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer1">
        <p>Crafted with passion, designed for comfort. Elevate your space with timeless wooden furniture that lasts a lifetime.</p>
        <div className="f1">
        <img src="https://cdn-icons-png.flaticon.com/128/14090/14090489.png" alt=""/>
        <p>365/12, Kullanchavadi main road, Vegakkollai, Panruti, Cuddalore, Tamil Nadu, India-607302</p>
        </div>
        <div className="f1">
          <img src="https://cdn-icons-png.flaticon.com/128/14026/14026779.png" alt=""/>
          <p>support@woodenfurnitureshop.com</p>
        </div>
        <div className="f1">
          <img src="https://cdn-icons-png.flaticon.com/128/14025/14025226.png" alt=""/>
          <p>+91-6384422333</p>
        </div>
      </div>
      <div className="footer2">
        <h2>Whats App</h2>
        <img src={qrcode} alt=""/>
      </div>
    </div>
    </>
  )
}

export default Footer
