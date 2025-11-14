import { useState } from "react";

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
      // 🌟 URL داخل backtick تا ${city} و ${API_KEY} جایگزین شوند
     const res = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);
      if (!res.ok) {
        throw new Error('City not found');
      }

      const data = await res.json();
      console.log(data); // بررسی داده دریافتی
      setWeatherData(data);
    } catch (err) {
      setError(true);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter your city please..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={searchHandler} style={{ padding: '8px 12px' }}>Search</button>
      </div>

      {/* نمایش شرطی */}
      <div style={{ marginTop: '20px' }}>
        {loading && <p>در حال دریافت اطلاعات...</p>}
        {error && <p style={{ color: 'red' }}>لطفاً یک شهر معتبر وارد کنید</p>}
        {weatherData && !loading && !error && (
          <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>شهر: {weatherData.name}</h3>
            <p>دما: {weatherData.main.temp}°C</p>
            <p>وضعیت هوا: {weatherData.weather[0].main}</p>
          </div>
        )}
      </div>
    </div>
  );
}