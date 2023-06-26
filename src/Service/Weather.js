import { DateTime } from "luxon";




const API_KEY = "57e9a1a5e770ccd37d00e7dda504e7d3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";



const getWeatherData = async (location, units) => {
  const currentWeatherUrl = `${BASE_URL}/weather?q=${location}&units=${units}&appid=${API_KEY}`;

  const currentWeatherResponse = await fetch(currentWeatherUrl);
  if (!currentWeatherResponse.ok) {
    throw new Error("Failed to fetch current weather data");
  }
  const currentWeatherData = await currentWeatherResponse.json();

  const { lat, lon } = currentWeatherData.coord; // Extract latitude and longitude

  const forecastUrl = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;

  const forecastResponse = await fetch(forecastUrl);
  if (!forecastResponse.ok) {
    throw new Error("Failed to fetch forecast data");
  }
  const forecastData = await forecastResponse.json();

  return {
    currentWeather: formatCurrentWeather(currentWeatherData),
    forecast: formatForecastWeather(forecastData),
  };
};


const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { city, list } = data;
  const timezone = city.timezone;

  const daily = list
    .filter((_, index) => index % 8 === 0) 
    .slice(0,6) 
    .map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "cccc"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    });

  const hourly = list
    .slice(0, 5) 
    .map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    });

  return { timezone, daily, hourly };
};




const formatToLocalTime = (secs, offset, format = "cccc','hh:mm a") => {
  const dateTime = DateTime.fromSeconds(secs).toUTC();
  const dateTimeWithOffset = dateTime.plus({ seconds: offset });
  return dateTimeWithOffset.toFormat(format);
};

const iconUrlFromCode=(code)=>`https://openweathermap.org/img/wn/${code}@2x.png`;

// Usage:
getWeatherData("Berlin", "metric")
  .then((weatherData) => {
    console.log("Current Weather:", weatherData.currentWeather);
    console.log("Forecast Weather:", weatherData.forecast);
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

 


  export default getWeatherData;
  export {formatToLocalTime,iconUrlFromCode};

