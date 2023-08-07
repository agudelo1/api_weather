import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const API_KEY = "bb3bacf6cbc0480acd5ff293fee9760f";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className="relative h-screen       text-white font-lato flex justify-center items-center px-4">
      <section className="brightness-75 bg-[url('/img/03n.jpeg')] bg-center bg-cover bg-no-repeat absolute h-screen w-full -z-10"></section>
      <Weather weatherInfo={weatherInfo} />
    </main>
  );
}

export default App;
