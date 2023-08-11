import React, { Component } from 'react';
import './PilotPopup.css';

const PilotPopup = ({ pilot, onClose }) => {
  

    return (
      <div className="PilotPopupOverlay">
        <div className="PilotPopup">
          <h2>Pilot Details</h2>
          <p><strong>Name:</strong> {pilot.name}</p>
          <p><strong>Height:</strong> {pilot.height}</p>
          <p><strong>Mass:</strong> {pilot.mass}</p>
          {/* Add more pilot details here */}
          <button className='button' onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }


export default PilotPopup;
