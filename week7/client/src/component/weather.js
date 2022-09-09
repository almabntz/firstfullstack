import { useEffect, useState } from "react";

const Weather = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [respData, setWeather] = useState({});

  const loadData = () => {
    fetch("http://localhost:8080/api/weather")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data);
          setWeather(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    loadData();
  }, []);
  if (error) {
    return <div>error:{error.message}</div>;
  } else if (!isLoaded) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="container">
        <h1>Daily Weather report</h1>
        <p>This is a place holder</p>
        <div className="card">
          <h5 className="card-title p-2">{respData.name}</h5>
          <img
          src={`http://openweathermap.org/img/wn/${respData.weather[0].icon}@4x.png`}
          className="card-img-top"
          alt={respData.weather[0].description}
          />
          
          <p className="card-text">{respData.weather[0].description}</p>
          <p className="card-text">
            High {respData.main.temp_max}&deg;C Low {respData.main.temp_min}
            &deg;C
          </p>
          <p className="card-text">
            Feels like {respData.main.feels_like}&deg;C
          </p>
          <p className="card-text">Pressure {respData.main.pressure}mb</p>
          <p className="card-text">Humidity {respData.main.humidity}%</p>
          <div className="card-body"></div>
        </div>
      </div>
    );
  }
};

export default Weather;
