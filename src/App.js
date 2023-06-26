
import './App.css';
import Right from './components/RightSide.jsx/Right';
import Left from './components/LeftSide.jsx/Left';
import getWeatherData from './Service/Weather.js';
import { useEffect, useState } from 'react';

function App() {

  const [query,setQuery]=useState({q:"Delhi"})
  const [units,setUnits]=useState('metric');
  const [weatherData, setWeatherData] = useState(null);

 


    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const data = await getWeatherData(query.q,units);
          setWeatherData(data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
  
      fetchWeatherData();
    }, [query,units]);


 
  return (
    <div className="App">
   
    <Right weatherData={weatherData} setQuery={setQuery} units={units}/>
    <Left weatherData={weatherData} setUnits={setUnits} units={units} />

    </div>
  );
}

export default App;
