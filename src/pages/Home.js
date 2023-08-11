import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsivePie } from '@nivo/pie';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const peopleResponse = await axios.get('https://swapi.dev/api/people/');
        const starshipsResponse = await axios.get('https://swapi.dev/api/starships/');
        const vehiclesResponse = await axios.get('https://swapi.dev/api/vehicles/');
        const planetsResponse = await axios.get('https://swapi.dev/api/planets/');

        const peopleCount = peopleResponse.data.count;
        const starshipsCount = starshipsResponse.data.count;
        const vehiclesCount = vehiclesResponse.data.count;
        const planetsCount = planetsResponse.data.count;



        const data = [
          { id: 'People', value: peopleCount },
          { id: 'Starships', value: starshipsCount },
          { id: 'Vehicles', value: vehiclesCount },
          { id: 'Planets', value: planetsCount },
        ];
        console.log(data);

        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="Home">
      <h1 className='font-bold text-4xl'>SWAPI Data Visualization</h1>
      <div className="PieChartContainer items-center justify-content" style={{ width: '600px', height: '400px' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
      </div>
    </div>
  );
}

export default Home;
