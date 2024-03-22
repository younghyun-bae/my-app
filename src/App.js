import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
	const weather_API =
		"https://api.openweathermap.org/data/2.5/weather?lat=37.55&lon=126.99&appid=0392c2de4574d49fb4740fd4559aa5d2";

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(weather_API);
			const data = await response.json();
			setData(data.results);
		}
		fetchData();
	}, []);

  return (
    <div className="App">
      {/* https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */}
      
    </div>
  );
}

export default App;
