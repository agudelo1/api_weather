import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  const element = document.documentElement;

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const countryName = e.target.countryName.value;
    const API_KEY = "bb3bacf6cbc0480acd5ff293fee9760f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${API_KEY}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));

    document.getElementById("myForm").reset();
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
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 1000);

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className=" flex-col relative h-screen  text-white font-lato flex justify-center items-center p-4   ">
      {loading ? (
        <div className=" absolute bg-black w-[100%] h-[100vh] flex justify-center items-center z-50 top-0 ">
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
          <section className="fixed top-5 right-5 duration-100 dark:bg-indigo-500/50 bg-amber-300/50 rounded-md">
            {options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                  theme === opt.text && "text-black"
                } `}
              >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))}
          </section>
          <section className="pt-10">
            <form
              id="myForm"
              onSubmit={handleSubmit}
              className="flex rounded-md overflow-hidden max-w-max mx-auto "
            >
              <input
                autoComplete="off"
                id="countryName"
                placeholder="Medellin..."
                className="dark:text-white p-2 dark:bg-black/30  bg-slate-600/70 text-black "
                type="text"
              />
              <button className="dark:bg-indigo-500/50 px-4 bg-white/50 text-black  dark:text-white">
                Search
              </button>
            </form>
          </section>

          <Weather weatherInfo={weatherInfo} />
        </>
      )}
    </main>
  );
}

export default App;
