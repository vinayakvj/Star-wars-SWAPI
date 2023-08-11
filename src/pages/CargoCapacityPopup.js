import React from 'react';
import './PilotPopup';

function CargoCapacityPopup({ cargoCapacity, onClose }) {
  return (
    <div className="CargoCapacityPopupOverlay">
      <div className="CargoCapacityPopup">
        <h2 className='font-bold text-3xl'>Cargo Capacity</h2>
        <p><strong>Capacity:</strong> {cargoCapacity}</p>
        <button className='button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CargoCapacityPopup;
