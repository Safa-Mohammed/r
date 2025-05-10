import React from 'react'
import './about.css';

export default function About() {
  return (
    <div className="container  about">
     <div className="about-section d-flex flex-column justify-content-start">
      <div className="about-text ">
        <h4>ABOUT US</h4>
        <h5>WHO AM I?</h5>
        <p>As a dedicated and innovative computer engineer, I bring a strong passion for solving complex problems through technology. With a solid foundation in both hardware and software systems, I specialize in designing, developing, and implementing efficient, scalable solutions that meet real-world challenges.</p>
      <p>My commitment to staying current with emerging technologies, programming languages, and development methodologies allows me to contribute modern, efficient solutions to any team or project. Recognized for my analytical thinking, precision, and collaborative spirit, I consistently aim to deliver high-quality outcomes while advancing both my technical and professional capabilities.</p>
      </div>
      <div className="container-fluid">
  <div className="row row-cols-1 row-cols-md-2 g-5 row-cards">
    <div className="col   roww ">
      <div className="card ">
        <div className="card-body text-center">
          <div className="card-icon">📱</div>
          <h3 className="card-title">Application Development</h3>
        </div>
      </div>
    </div>

    <div class="col  catrds  ">
      <div class="card">
        <div class="card-body text-center">
          <div class="card-icon">🌐</div>
          <h3 class="card-title">Web Design</h3>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
  </div>
  )
}
