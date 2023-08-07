import { useState } from "react";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1);
  };

  const kelvinToFahrenheit = (tempKelvin) => {
    return (((tempKelvin - 273.15) * 9) / 5 + 32).toFixed(1);
  };

  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  };

  const resultTempConversion = isCelsius
    ? kelvinToCelsius(weatherInfo?.main.temp)
    : kelvinToFahrenheit(weatherInfo?.main.temp);
  return (
    <section className=" text-center ">
      <h2 className="p-4 font-bold text-xl  ">{weatherInfo?.name}</h2>
      <section className="grid gap-4 sm:grid-cols-[auto_auto]    ">
        {/* Section superior  */}
        <section
          className="bg-black/25 p-10 rounded-[50px] 
        grid grid-cols-2 items-center  "
        >
          <h4 className="col-span-2 font-semibold text-lg">
            {weatherInfo?.weather[0].description}
          </h4>
          <span className="text-[50px]  ">
            {resultTempConversion} °{isCelsius ? "C" : "F"}
          </span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>
        {/* Section inferior  */}
        <section
          className="bg-black/25 p-10 py-4 rounded-[20px]
        grid grid-cols-3 items-center sm:grid-cols-1 "
        >
          <article className="flex gap-2 items-center">
            <div className="w-[20px]">
              <img src={"/img/wind.png"} alt="" />
            </div>
            <span className="text-sm">{weatherInfo?.wind.speed} m/s</span>
          </article>
          <article className="flex gap-2 items-center">
            <div className="w-[20px]">
              <img src={"/img/humidity.png"} alt="" />
            </div>
            <span className="text-sm ">{weatherInfo?.main.humidity} %</span>
          </article>
          <article className="flex gap-2 items-center">
            <div className="w-[20px]">
              <img src={"/img/pressure.png"} alt="" />
            </div>
            <span className="text-sm">{weatherInfo?.main.pressure} hPa</span>
          </article>
        </section>
      </section>
      <button
        onClick={handleChangeUnitTemp}
        className="mt-4 bg-indigo-500 text-white p-2 px-8 rounded-3xl text-sm"
      >
        {isCelsius ? "Change to C" : "Change to F"}
      </button>
    </section>
  );
};
export default Weather;
