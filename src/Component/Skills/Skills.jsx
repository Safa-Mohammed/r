import React from 'react'
import './skills.css';

export default function Skills() {
  return (
    <div className="container skills">
      <div className="skills-section d-flex flex-column justify-content-start bg-body">
        <div className="skills-text">
          <h4>MY SPECIALTY</h4>
          <h5>MY SKILLS</h5>
          <p>As a dedicated and innovative computer engineer, I bring a strong passion for solving complex problems through technology. With a solid foundation in both hardware and software systems, I specialize in designing, developing, and implementing efficient, scalable solutions that meet real-world challenges.</p>
        </div>
        
        {/* Skills Section */}
        <div className="skills-section mt-4">
          <div className="row">
            {/* First Column */}
            <div className="col-md-6">
     
              
              <div className="skill-item mb-4">
                <div className="skill-name d-flex justify-content-between">
                  <span>HTML5</span>
                  <span>85%</span>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-info" 
                    role="progressbar" 
                    style={{ width: '85%' }} 
                    aria-valuenow="85" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="skill-name d-flex justify-content-between">
                  <span>JS</span>
                  <span>75%</span>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-danger" 
                    role="progressbar" 
                    style={{ width: '75%' }} 
                    aria-valuenow="75" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            
              <div className="skill-item mb-4">
                <div className="skill-name d-flex justify-content-between">
                  <span>WordPress</span>
                  <span>70%</span>
                </div>
                <div className="progress ">
                  <div 
                    className="progress-bar bg-primary-subtle" 
                    role="progressbar" 
                    style={{ width: '70%' }} 
                    aria-valuenow="70" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Second Column */}
            <div className="col-md-6">
              <div className="skill-item mb-4">
                <div className="skill-name d-flex justify-content-between">
                  <span> Bootstrap</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-warning" 
                    role="progressbar" 
                    style={{ width: '80%' }} 
                    aria-valuenow="80" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              
              <div className="skill-item mb-4">
                <div className="skill-name d-flex justify-content-between">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-dark" 
                    role="progressbar" 
                    style={{ width: '90%' }} 
                    aria-valuenow="90" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              
              <div className="skill-item mb-4">
                <div className="skill-name d-flex justify-content-between">
                  <span>RPA</span>
                  <span>60%</span>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-opacity-75" 
                    role="progressbar" 
                    style={{ width: '60%' }} 
                    aria-valuenow="60" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}