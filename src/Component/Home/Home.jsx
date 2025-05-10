import React from 'react'
import './../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
  // Make sure to place your image.png in the same directory

export default function Home() {
  return (
    <div className="container">
      <div className="content-container">
      <div className="box red p-5">
       
  <div className="image-content p-5 h-100 d-flex">
    <div className="m-auto text-left" style={{width: '80%'}}>
      
      <h2 className='title-name'>Hi! <br/>I'm Safa</h2>
      <p className='desc'>Custom-coded in React.js with Bootstrap 5 and semantic HTML5</p>
      
      <button className="download-btn mt-3">DOWNLOAD CV <i class="fas fa-download"></i></button>
    </div>
  </div>
</div>  
        <div className="box green p-5">
        <div className="image-content p-5 h-100 d-flex">
    <div className="m-auto text-left" style={{width: '80%'}}>
      
      <h2 className='title-name'>Hi! <br/>I'm Developer</h2>
      <p className='desc'>Custom-coded in React.js with Bootstrap 5 and semantic HTML5</p>
      
      <button className="download-btn mt-3">View Profile <i class="fas fa-download"></i></button>
    </div>
  </div>
</div>
        
       
      </div>
    </div>
  )
}