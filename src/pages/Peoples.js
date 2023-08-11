import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vehicle.css';
import { ResponsiveBar } from '@nivo/bar';

function Peoples() {
  const [people, setPeople] = useState([]);
  const [peopleCount, setPeopleCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        const peopleData = response.data.results;
        setPeople(peopleData);
        setPeopleCount(response.data.count);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
    }

    fetchData();
  }, []);

  const data = [
    {
      id: 'People',
      value: peopleCount,
    },
  ];

  return (
    <div className="App">
      <h1 className='font-bold text-4xl'>Star Wars People</h1>
      <div className="ChartContainer">
        <ResponsiveBar
          data={data}
          keys={['value']}
          indexBy="id"
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: 'category10' }}
          enableGridY={false}
          axisBottom={{
            tickRotation: -45,
          }}
        />
      </div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <h3 className='font-bold text-3xl'>{person.name}</h3>
            <p><strong>Height:</strong> {person.height}</p>
            <p><strong>Mass:</strong> {person.mass}</p>
            <p><strong>Birth Year:</strong> {person.birth_year}</p>
            <p><strong>Gender:</strong> {person.gender}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Peoples;
