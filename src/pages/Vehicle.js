import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vehicle.css';

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await axios.get('https://swapi.dev/api/vehicles/');
        const vehicles = response.data.results;
        setVehicles(vehicles);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    }

    fetchVehicles();
  }, []);

  return (
    <div className="App">
      <h1 className='font-bold text-4xl'>Star Wars Vehicles</h1>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index}>
            <h1 className='font-bold text-3xl'>{vehicle.name}</h1>
            <p><strong>Model:</strong> {vehicle.model}</p>
            <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
            <p><strong>Cost in Credits:</strong> {vehicle.cost_in_credits}</p>
            <p><strong>Length:</strong> {vehicle.length}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
