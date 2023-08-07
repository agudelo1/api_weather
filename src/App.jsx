import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const countryName = e.target.countryName.value;
    const API_KEY = "bb3bacf6cbc0480acd5ff293fee9760f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));

    document.getElementById("miForm").reset();
  };

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
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 4000);
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className=" flex-col relative h-screen  text-white font-lato flex justify-center items-center ">
      {loading ? (
        <div className="bg-black w-[100%] h-[100vh] flex justify-center items-center">
          <HashLoader
            color={"#36d7b7"}
            loading={loading}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <section>
            <form
              id="miForm"
              onSubmit={handleSubmit}
              className="flex rounded-md overflow-hidden max-w-max mx-auto "
            >
              <input
                id="countryName"
                placeholder="Medellin..."
                className="text-white p-2 bg-black/30"
                type="text"
              />
              <button className="bg-indigo-500 px-4">Search</button>
            </form>
          </section>

          <Weather weatherInfo={weatherInfo} />
        </>
      )}
    </main>
  );
}

export default App;
