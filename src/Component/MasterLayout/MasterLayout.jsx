import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './../../App.css';

export default function MasterLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Mobile Top Navbar */}
      <nav className="d-md-none  text-white d-flex justify-content-between align-items-center px-3 py-2">
         
        <button className="btn btn-light btn-sm border px-3 py-2 fs-4" onClick={() => setShowSidebar(true)}>
          ☰
        </button>
      </nav>

      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* Sidebar */}
          <div
            className={`sidebar bg-light col-6 col-md-2 p-0 position-fixed top-0 start-0 h-100 ${
              showSidebar ? 'd-block' : 'd-none'
            } d-md-block`}
            style={{ zIndex: 1050 }}
          >
            {/* Close icon for mobile */}
            <div className="d-flex justify-content-end d-md-none p-2">
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowSidebar(false)}>
                &times;
              </button>
            </div>
            <NavBar />
          </div>

          {/* Main Content */}
          <div className={`col-10 ${showSidebar ? 'd-none d-md-block' : ''} col-md-10 offset-md-2`}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
