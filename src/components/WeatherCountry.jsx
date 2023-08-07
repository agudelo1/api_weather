import axios from "axios";
import { useEffect, useState } from "react";

const WeatherCountry = ({ countryName, apiKey }) => {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`
      )
      .then(({ data }) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>WeatherCountry</div>;
};
export default WeatherCountry;
