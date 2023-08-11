import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vehicle.css';

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        const planets = response.data.results;
        setPlanets(planets);
      } catch (error) {
        console.error('Error fetching planet data:', error);
      }
    }

    fetchPlanets();
  }, []);

  return (
    <div className="App">
      <h1 className='font-bold text-4xl'>Star Wars Planets</h1>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <h3 className='font-bold text-3xl'>{planet.name}</h3>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
            <p><strong>Population:</strong> {planet.population}</p>
            <p><strong>Gravity:</strong> {planet.gravity}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planets;
