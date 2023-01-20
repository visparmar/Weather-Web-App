import React,{useState,useEffect} from "react"
import Data from './data'
import './Outer.css'


const Outer = () => {

    const [initialValue,setInitialValue]=useState('ghaziabad');
    const [doremon,setdoremon]=useState({});

  const getData= async()=>{
    try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${initialValue}&units=metric&appid=9930c166b9fb09cbc8bb182b368b2a4b`
    
           const data=await fetch(url);
           const originalData=await data.json();

           const{temp,pressure,humidity}=originalData.main;
           const{country,sunset}=originalData.sys;
           const{main:weathermood}=originalData.weather[0];
           const{name}=originalData;
           const {speed}=originalData.wind;

           
         const weatherinfo={
            temp,
            pressure,
            humidity,
            country,
            weathermood,
            name,
            speed,
            sunset,
         };

         setdoremon(weatherinfo);


           console.log(temp,pressure,humidity,country,name,sunset);
    } catch (error) {
        console.log(error);
    }
  }

        

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            {/* <div className="nav"></div> */}
            <div className="container">

                <div className="search">
                    <input type="search"
                        placeholder="Search..."
                        autoFocus
                        className="search-term"
                        value={initialValue}
                        onChange={(e)=>setInitialValue(e.target.value)}
                    />
                    <i className="fa-sharp fa-solid fa-magnifying-glass" onClick={()=>getData()}/>

                </div>

                <Data info={doremon}/>

              
            </div>

        </>
    );


}
export default Outer;