import React from 'react';
import Image from 'next/image';
import axios from 'axios';


export const AppNav = () => {
  const [weather, setWeather] = React.useState({});
  const [time, setTime] = React.useState("");
  React.useEffect(()=>{
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', {"timeZone": "America/Vancouver"}));
    }, 1000);
    return () => clearInterval(interval);
  });
  React.useEffect(()=>{
    (async () => {
      try{
        const { data } = await axios.post(`https://localnewstv-todo.onrender.com/api/weather`,{ location: "Esquimalt"})
        setWeather(data);
      } catch(ex){
          console.log(ex);
      }
    })()},[]);
  return (
    <div className={"appNav"}>
      <div className={"appNavTemp"}>
        <p>{weather.current?.temp_c || "0.0"}°C</p>
      </div>
      <div className={"appNavWeather"}>
        {weather.current?.condition.icon
        ?<Image
          alt="Weather Icon"
          src={"https:"+ weather.current?.condition.icon}
          width={40}
          height={40}
         />
        : <></>
        }
        
      </div>
      <div className={"appNavTime"}>
        <p>{time}</p>
      </div>
    </div>
  )  
}