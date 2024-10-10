import React, { useState } from 'react'
import './index.css'
import axios from 'axios';
function Weather() {
    const [city,setCity] = useState("");
    const [resp,setResp] = useState()
    const cityChange = (e) =>{
        setCity(e.target.value)
    };
    const weatherData = async () => {
      try{
    const response1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`e4d3549641b70620672b6ee5f4d4014a`}`);
    // console.log(response1.data);
    setResp(response1.data)
      }
      catch(err){console.log(err);
      }
      ;
      
    }
    const handleClick = () =>{
      weatherData();
    }

  return (
    <>
    <div style={{height:'75vh',width:'50vw',backgroundColor:"black", borderRadius:'10px',backdropFilter:'blur(10px)'}}><h1 style={{backdropFilter:'blur(20px)'}}>Weather</h1>
    
    <input style={{width:'80%', height:'25px'}} placeholder='Enter City' type="text" name="" value={city} onChange={cityChange} id="" />
<br />
    <button onClick={handleClick}>Get weather</button>
    <br/>
    {resp && <>
    <div style={{marginTop:'15px'}}>
      <h3> {resp.name}</h3>
      <h3>Wind Speed:{resp.wind.speed} mph</h3>
      <h3>temperature(F):{resp.main.temp} </h3>
    <h3>Details:-{resp.weather[0].description}</h3>
    <h3>Co-ordinates:<br></br> long :{resp.coord.lon} , lat :{resp.coord.lat}</h3>
    </div>
    </>}
    
    </div></>
  )
}

export default Weather