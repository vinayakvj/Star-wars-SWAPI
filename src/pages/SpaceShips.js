import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vehicle.css';
import CargoCapacityPopup from './CargoCapacityPopup';

function SpaceShips() {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);

  async function fetchStarships() {
    try {
      const response = await axios.get('https://swapi.dev/api/starships/');
      const starships = response.data.results;
      setStarships(starships);
    } catch (error) {
      console.error('Error fetching starship data:', error);
    }
  }

  useEffect(() => {
    fetchStarships();
  }, []);

  const openCargoCapacityPopup = (cargoCapacity) => {
    setSelectedStarship({ cargoCapacity });
  };

  const closeCargoCapacityPopup = () => {
    setSelectedStarship(null);
  };

  return (
    <div className="SpaceShips">
      <h1 className='font-bold text-4xl'>Star Wars Starships</h1>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <div
              onClick={() => openCargoCapacityPopup(starship.cargo_capacity)}
              className="StarshipCard"
            >
              <h3 className='font-bold text-3xl'>{starship.name}</h3>
              <p><strong>Model:</strong> {starship.model}</p>
              <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
              <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
              <p><strong>Length:</strong> {starship.length}</p>
              <p><strong>Crew:</strong> {starship.crew}</p>
              <p><strong>Passengers:</strong> {starship.passengers}</p>
            </div>
          </li>
        ))}
      </ul>
      {selectedStarship && (
        <div className="CargoCapacityPopupOverlay">
          <CargoCapacityPopup
            cargoCapacity={selectedStarship.cargoCapacity}
            onClose={closeCargoCapacityPopup}
          />
        </div>
      )}
    </div>
  );
}

export default SpaceShips;
