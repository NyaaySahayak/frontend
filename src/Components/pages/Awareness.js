import React from 'react';
import './Aware.css';


export default function Awareness() {
  return (
    <div style={{ backgroundImage: `url(${require("../images/bg-images/45304.png")})`, height: "91vh"}}> 

    <div className='maincardsrow' >
      <div className='col-4'>
        <div className="maincards">
          <img src="https://t3.ftcdn.net/jpg/05/75/22/58/360_F_575225818_PQ2ZPHFw51yCcmieutB5bT843nPAPzo3.jpg" className="maincards-img" alt="" />
          <div className="maincards-body" id="one">
            <h1 className="maincards-title">LAWS</h1>
            <p className="maincards-info">Different laws.</p>
            <button className="maincards-btn">KNOW MORE</button>
          </div>
        </div>
      </div>
      <div className='col-4'>
        <div className="maincards">
          <img src="https://blog.ipleaders.in/wp-content/uploads/2020/12/human-rights-day-feature_1290x688_ms_w1140_h545_bg.jpg" className="maincards-img" alt="" />
          <div className="maincards-body">
            <h1 className="maincards-title">RIGHTS</h1>
            <p className="maincards-info">Rights and Duties of citizens.</p>
            <button className="maincards-btn">KNOW MORE</button>
          </div>
        </div>
      </div>
      <div className='col-4'>
        <div className="maincards">
          <img src="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="maincards-img" alt="" />
          <div className="maincards-body">
            <h1 className="maincards-title">GUIDES</h1>
            <p className="maincards-info">Related to legal documents.</p>
            <button className="maincards-btn">KNOW MORE</button>
          </div>
        </div>
      </div>
    </div>
    </div>



  )
}