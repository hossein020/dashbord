import { useState } from "react";
import "./Weather.css"; // برای استایل ساده

export default function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API_KEY = "d55225c5d055a97aebec2cfa008a77d8"; // کلید خودت

  const searchHandler = async () => {
    if (city.trim() === '') {
      setError(true);
      setWeatherData(null);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(true);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // واکنش به Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") searchHandler();
  };

  return (
    <div className="weather-container">
      <div className="weather-input">
        <input
          type="text"
          placeholder="Enter your city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={searchHandler}>Search</button>
      </div>

      <div className="weather-result">
        {loading && <p className="loading">در حال دریافت اطلاعات...</p>}
        {error && <p className="error">لطفاً یک شهر معتبر وارد کنید</p>}
        {weatherData && !loading && !error && (
          <div className="weather-card">
            <h3>{weatherData.name}</h3>
            <p>دما: {weatherData.main.temp}°C</p>
            <p>وضعیت هوا: {weatherData.weather[0].main}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
          </div>
        )}
      </div>
    </div>
  );
}