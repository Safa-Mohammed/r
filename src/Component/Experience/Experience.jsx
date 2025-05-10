import React from 'react'
import './experience.css'

export default function Experience() {
  return (
   < div className="experience-section d-flex flex-column justify-content-start ">
    <div className="experience-text">
      <h4>EXPERIENCE</h4>
      <h5>WORK EXPERIENCE</h5>
    </div>
    <div class="timeline  p-4">
  <div class="timeline-item p-2 ">
    <div class="timeline-icon bg-primary text-white">
      <span>1</span>
    </div>
    <div class="timeline-content  ">
      <h5 class="fw-bold"> Training in PDO <span class="text-muted fw-normal fs-6">12\2\2023 - 4\6\2023</span></h5>
      <p>Training in RPA Team and learning online courses about RPA.</p>
    </div>
  </div>

  <div class="timeline-item p-2">
    <div class="timeline-icon bg-danger text-white">
      <span>2</span>  
    </div>
    <div class="timeline-content ">
      <h5 class="fw-bold">Front End Developer at Fits Company <span class="text-muted fw-normal fs-6">2024–2025</span></h5>
      <p>Traing one year at fits company.</p>
    </div>
  </div>

   
  <div class="timeline-item">
    <div class="timeline-icon bg-white text-white ">
       <div className='p-5'></div>
    </div>
    
  </div>
</div>

    </div>
  )
}
