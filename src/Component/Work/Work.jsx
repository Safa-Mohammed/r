import React, { useState } from 'react';
import workImage from '../../assets/photowork1.png';
import workimg from '../../assets/restoran.png';
 import './work.css'

export default function Work() {
  const [activeTab, setActiveTab] = useState(null); // 'web' or 'graphic'

  return (
    <div className="work-section d-flex flex-column justify-content-start px-5 pt">
      <div className="work-text">
        <h4 className='pt-3'>MY WORK</h4>
        <h5>RECENT WORK</h5>
      </div>

      <p className="d-inline-flex gap-1">
        <a
          className={`collapse-link1 px-2 ${activeTab === 'web' ? 'text-primary' : ''}`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(activeTab === 'web' ? null : 'web'); // toggle
          }}
        >
          Web Development
        </a>

        <a
          className={`collapse-link2 px-2 ${activeTab === 'graphic' ? 'text-primary' : ''}`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(activeTab === 'graphic' ? null : 'graphic'); // toggle
          }}
        >
          Graphic Design
        </a>
      </p>

      {activeTab === 'web' && (
  <div className="d-flex gap-2">
   <div className="card flex-grow-1 position-relative overflow-hidden">
  <img className="image-work w-100 rounded-0" src={workImage} alt="Work 01" />
  <div className="overlay-custom">
    <div className="overlay-content-top">
      <h5 className="text-white fw-bold ">WORK 01</h5>
      <div className="underline-line mb-2"></div>
      <p className="text-light">Style</p>
    </div>
    <div className="overlay-content-bottom d-flex gap-2">
      <div className="icon-box">
      <i className="fas fa-share-alt"></i>
      </div>
      <div className="icon-box">
      <i className="fas fa-eye"></i>      100
      </div>
      <div className="icon-box">
      <i className="fa fa-heart"></i>      59
      </div>
    </div>
  </div>
</div>


<div className="card flex-grow-1 position-relative overflow-hidden">
  <img className="image-work w-100 rounded-0" src={workImage} alt="Work 01" />
  <div className="overlay-custom">
    <div className="overlay-content-top">
      <h5 className="text-white fw-bold ">WORK 01</h5>
      <div className="underline-line mb-2"></div>
      <p className="text-light">Style</p>
    </div>
    <div className="overlay-content-bottom d-flex gap-2">
      <div className="icon-box">
      <i className="fas fa-share-alt"></i>
      </div>
      <div className="icon-box">
      <i className="fas fa-eye"></i>      100
      </div>
      <div className="icon-box">
      <i className="fa fa-heart"></i>      59
      </div>
    </div>
  </div>
</div>

  </div>
)}


      {/* Graphic Design content */}
      {activeTab === 'graphic' && (
        <div className="d-flex gap-2">
           
           <div className="card flex-grow-1 position-relative overflow-hidden">
  <img className="image-work w-100 rounded-0" src={workimg} alt="Work 01" />
  <div className="overlay-custom">
    <div className="overlay-content-top">
      <h5 className="text-white fw-bold ">WORK 01</h5>
      <div className="underline-line mb-2"></div>
      <p className="text-light">Style</p>
    </div>
    <div className="overlay-content-bottom d-flex gap-2">
      <div className="icon-box">
      <i className="fas fa-share-alt"></i>
      </div>
      <div className="icon-box">
      <i className="fas fa-eye"></i>      100
      </div>
      <div className="icon-box">
      <i className="fa fa-heart"></i>      59
      </div>
    </div>
  </div>
</div>

<div className="card flex-grow-1 position-relative overflow-hidden">
  <img className="image-work w-100 rounded-0" src={workImage} alt="Work 01" />
  <div className="overlay-custom">
    <div className="overlay-content-top">
      <h5 className="text-white fw-bold ">WORK 01</h5>
      <div className="underline-line mb-2"></div>
      <p className="text-light">Style</p>
    </div>
    <div className="overlay-content-bottom d-flex gap-2">
      <div className="icon-box">
      <i className="fas fa-share-alt"></i>
      </div>
      <div className="icon-box">
      <i className="fas fa-eye"></i>      100
      </div>
      <div className="icon-box">
      <i className="fa fa-heart"></i>      59
      </div>
    </div>
  </div>
</div>

        </div>
      )}
    </div>
  );
}
