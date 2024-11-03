import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const CentersPage = () => {

  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json();
      console.log(data.data[0]);

      const centersData = data.data.map(({ id, name, address, capacity, open, info }) => ({ id, name, address, capacity, open, info }));
      setCenters(centers.concat(centersData));
    };
    fetchCenters();
    console.log(centers);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Pobočky</h1>
      </header>
      <main className="centers-grid">
      
      
        {centers.map(center => (
          <div key={center.id} className="grid-item">           
              <NavLink to={`${center.id}`} className={({isActive}) => (isActive ? "selected" : 'unselected')}>{center.name}</NavLink>
              <p> {center.address}</p>            
          </div>
            ))
            }
         
      </main>    
      <Outlet/>  
    </div>
  );
};