import React, { useState } from "react";

const api_key = process.env.REACT_APP_API_KEY; //Key is private
const base = "https://api.openweathermap.org/data/2.5/";

/*Used 'useState' Hook of react to change the state 
of what is being rendered on the screen. */
function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //evt = event
  /* call to the URL using our credentials and query to fetch the data from
      the server and then we change the state of what is being displayed on the
      screen. */
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${base}weather?q=${query}&units=metric&APPID=${api_key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()]; //returns number between 1-7 gets the day
    let date = d.getDate(); //returns date
    let month = months[d.getMonth()]; //returns month
    let year = d.getFullYear(); //returns year

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="City..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Weather;
