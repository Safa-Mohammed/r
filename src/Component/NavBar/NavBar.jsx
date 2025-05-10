import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import img from '../../assets/blank-profile-picture-973460_1280.webp';

export default function NavBar() {
  return (
    <div className="flex flex-col items-center    text-center ">
      <img
        src={img}
        alt="Safa Mohammed profile picture"
        className="w-32 h-32 p-3 object-cover"
      />
      <h4 className="mt-4">Safa Mohammed</h4>
      <p className="mt-1 mb-6">
        <span className="major  text-uppercase">Computer Engineering</span>
      </p>
      <nav class="nav flex-column text-center w-100 text-uppercase">
      <Link to="/home" className="nav-link custom-link">HOME</Link>
<Link to="/about" className="nav-link custom-link">About</Link>
<Link to="/skills" className="nav-link custom-link">Skills</Link>
<Link to="/experience" className="nav-link custom-link">Experience</Link>
<Link to="/work" className="nav-link custom-link">Work</Link>

</nav>

    </div>
  );
}
