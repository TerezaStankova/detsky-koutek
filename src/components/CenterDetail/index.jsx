import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const CenterDetail = () => {

  const [center, setCenter] = useState({adress: "aa", name: "", open: {}});
  const { id } = useParams();

  useEffect(() => {
    const fetchCenter = async () => {
      const response = await fetch(`http://localhost:4000/api/centers/${id}`);
      const centerData = await response.json();
      console.log(centerData);
      console.log(centerData.data.name);
      console.log(id);
      //const centersData = data.data.map(({ id, name, address, capacity, open, info }) => ({ id, name, address, capacity, open, info }));
      setCenter(((prevState) => ({
        ...prevState,
        name: centerData.data.name,
        address: centerData.data.address,
        info: centerData.data.info,
        open: centerData.data.open
      })));
      console.log(centerData);
    };
    fetchCenter();
    //console.log(center);
    console.log(id);
    console.log(center);
  }, [id]);

  return (
    <div className="container">
      <header>
        <h2>Pobočka {center.name}</h2>
      </header>
      { <main>        
      <p>{center.address}</p>   
      <p>{center.info}</p> 
      </main>    }  
    </div>
  );
};

{/* <ul>
{center.open.map(day => (
  <li key={day}></li>
          ))}
</ul> */}