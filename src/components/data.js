import React from 'react'
import './Outer.css'


const Data=({info})=>{

const {
         temp,
            pressure,
            humidity,
            country,
            weathermood,
            name,
            speed,
            sunset,
}=info;

let sec=sunset;
let date=new Date(sec*1000);
let timestr=`${date.getHours()}:${date.getMinutes()}`


return(
<>
<div className="sub-container">


<div className="weather-icon">
<img className="main-icon"  src={`/icon/wi-day-${weathermood}.svg`} alt="this is image" />
</div>


<div className="weather-info">
    <div className="weather-degree-location">

        <div className="degree-container">
            <span className="degree">{temp}&deg;</span>
            
        </div>
        <div className="location">
            <span className="location-state">{ weathermood}</span> <br />
            <span>{name},{country}</span>
        </div>


    </div>
    <div className="weather-date-time">
        <div className="date-time">
            <span>{new Date().toLocaleDateString()}</span> <br />
            <span>{new Date().toLocaleTimeString()}</span>
        </div>
    </div>

</div>


<div className="other-info">
    <div className="down-icon">
        <span className="lg-by"><img  className="humidity" src="/icon/sunset.png"/></span>
        <div >
            <span>{timestr} PM</span><br />
            <span>Sunset</span>
            </div>

    </div>
    <div className="down-icon">
        <span className="lg-by"><img  className="humidity" src='/humidity.png'></img></span>
        <div >
            <span>{humidity} g.m-3 </span><br />
            <span>humidity</span>
            </div>

    </div>
    <div className="down-icon">
        <span className="lg-by"><img className="humidity" src="/icon/pressure.jfif"/></span>
        <div >
            <span>{pressure} atm</span ><br />
            <span>pressure</span>
            </div>

    </div>
    <div className="down-icon">
        <span className="lg-by"><img className="humidity"  src="/icon/wi-strong-wind.svg" alt="this is image" /></span>
        <div >
            <span>{speed} mph</span><br />
            <span>wind speed</span>
            </div>

    </div>
   

</div>




</div>
</>
);


}
export default  Data;