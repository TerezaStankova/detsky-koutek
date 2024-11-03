import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const CenterDetail = () => {

  const [center, setCenter] = useState({adress: "Adresa", name: "", open: {}});
  const { id } = useParams();

  const dayToCzMap = {mon: "Pondělí", tue: "Úterý",wed: "Středa",thu: "Čtvrtek",fri: "Pátek",sat: "Sobota",sun: "Neděle",}

  useEffect(() => {
    const fetchCenter = async () => {
      const response = await fetch(`http://localhost:4000/api/centers/${id}`);
      const centerData = await response.json();
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
  }, [id]);

  return (
    <div className="container">
      <header>
        <h2>{center.name}</h2>
      </header>
      { <main>        
      <p>{center.address}</p>   
      <p>{center.info}</p> 
      <h3>Otevírací doba:</h3> 
      {Object.entries(center.open).map(([key, value]) => <li key={key}>{dayToCzMap[key]}: {value == null ? 'Zavřeno' : value}</li> )}
      </main>    }  
    </div>
  );
};