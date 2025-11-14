import { useState } from "react"

export default function Weather(){
    const [city , setCity] = useState('');
    const [weatherData , setWeatherData] = useState(null);
    const [loading , setLoding] = useState(false);
    const [error , setError] = useState(false);

    const searchHandler = () =>{
        console.log(city)
    }

    return(
        <div>
            <div>
            <input 
            type="text" 
            placeholder="enter your city pleas ..."
            value={city}
            onChange={(e)=> setCity(e.target.value)}
            />
            <button onClick={searchHandler}>search</button>
        </div>
        </div>
    )
}