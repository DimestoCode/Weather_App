import React from "react";
import "./styles.css";
const WeatherCard = ({ obj }) => {
  const getCelcius = (temp) => Number.parseInt(temp - 273);

  const getBackgroundUrl = (keyword) => {
    switch (keyword) {
      case "Thunderstorm": {
        return "thunder.jpg";
      }
      case "Drizzle": {
        return "rain.jpg";
      }
      case "Rain": {
        return "rain.jpg";
      }
      case "Snow": {
        return "snow.jpg";
      }
      case "Clear": {
        return "sunny.jpg";
      }
      case "Clouds": {
        return "clouds.jpg";
      }
      default: {
        return "dust.jpg";
      }
    }
  };
  if (obj) {
    const { weather, main, name } = obj;
    const { temp: current, feels_like: feel } = main;
    const { main: keyword, description, icon } = weather[0];
    const backUrl = `../imgs/${getBackgroundUrl(keyword)}`;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
      <div
        className="card mt-5"
        style={{
          background: ` center / cover no-repeat url(${backUrl})`,
        }}
      >
        <div className="overlay">
          <div className="card-body p-5 text-white text-center">
            <div className="">
              <img src={iconUrl} className="mb-2" />
            </div>

            <h3 className="card-title text-center text-white">
              <span className="title">
                <i className="fas fa-map-marker-alt mr-4"></i>
                {name}
              </span>
            </h3>
            <div className="card-text text-center text-white font-weight-bolder">
              <div className="mt-4">{keyword}</div>
              <div className="">Short description: {description}.</div>
              <div className="text-center mt-4">
                <div>
                  <i class="fas fa-temperature-low"></i> Current temperature:{" "}
                  {getCelcius(current)}&#8451;
                </div>
                <div className="">
                  <i class="fas fa-temperature-low"></i> Feels like:{" "}
                  {getCelcius(feel)}&#8451;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default WeatherCard;
