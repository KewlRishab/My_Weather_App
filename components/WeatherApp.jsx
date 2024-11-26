import {useState,useEffect} from 'react';
import axios from 'axios';
export default function WeatherApp(){
    const[city,setCity]=useState('London');
    const[weather,setWeather]=useState(null);

    useEffect (()=>{
        axios.get(`https://api.weatherapi.com/v1/current.json?key=3326d9ce6e4d4eee81751853242611&q=${city}`)
        .then((response)=>{setWeather(response.data)})
        .catch((error)=>console.error("Error incoming at Fetching weather",error));
    })

    return (
        <div>
            <h1>Weather App</h1>
            <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} placeholder="Enter City name"/>
            {weather ?(
                <div>
                    <h3>{weather.location.name}</h3>
                    <p>{weather.current.temp_c}°C</p>
                    <p>{weather.current.condition.text}</p>
                    <p>{weather.current.humidity}</p>
                    <p>Wind Speed:{weather.current.wind_kph}</p>
                </div>
            ):(
                <h2>Loading...</h2>
            )   
            }
        </div>
    )
}