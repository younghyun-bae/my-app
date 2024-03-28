import { useState, useEffect } from 'react';
import './App.css';

function App() {



	const [info, setInfo] = useState([]);

	useEffect(()=>{
		const apiKEY = process.env.REACT_APP_API_KEY;
		const getData = () => {
			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.55&lon=126.99&appid=${apiKEY}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setInfo(data);
			})
			.catch((error) => {
				console.log(error);
			});
		}
		getData();
	}, [])

	console.log(info.name, 'info');

  return (
    <div className="App">
			<div>
				<h1>{info.name}</h1>
				<h2>{info.id}</h2>
				{info.weather?.map((detail) => (
					<img key={detail.id} src={`https://openweathermap.org/img/wn/${detail.icon}@4x.png`} alt={detail.description} />
				))}
			</div>
    </div>
  );
}

export default App;
