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

  const imgWeather = {
    Clear: "bg-[url('/img/clear_sky.jpeg')]",
    Clouds: "bg-[url('/img/broken_clouds.jpeg')]",
    Rain: "bg-[url('/img/rain.jpeg')]",
    Thunderstorm: "bg-[url('/img/thunderstorm.jpeg')]",
    Snow: "bg-[url('/img/snow.jpeg')]",
    Mist: "bg-[url('/img/mist.jpeg')]",
    Drizzle: "bg-[url('/img/rain.jpeg')]",
    Smoke: "bg-black/80",
    Haze: "bg-[url('/img/mist.jpeg')]",
    Fog: "bg-[url('/img/mist.jpeg')]",
    Dust: "bg-black/80",
    Sand: "bg-black/80",
    Ash: "bg-black/80",
    Squall: "bg-[url('/img/shower_rain.jpeg')]",
    Tornado: "bg-[url('/img/shower_rain.jpeg')]",
  };
  const iconWeather = {
    Clear: "sol.png",
    Clouds: "clouds.png",
    Rain: "rain.png",
    Thunderstorm: "rayo.png",
    Snow: "nieve.png",
    Mist: "nieve.png",
    Drizzle: "rain.png",
    Smoke: "smoke.png",
    Haze: "nieve.png",
    Fog: "nieve.png",
    Dust: "smoke.png",
    Sand: "smoke.png",
    Ash: "smoke.png",
    Squall: "shower.png",
    Tornado: "shower.png",
  };
  const iso = {
    AF: "Afganistán",
    AX: "Islas Aland",
    AL: "Albania",
    DZ: "Argelia",
    AS: "Samoa Americana",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antártida",
    AG: "Antigua y Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaiyán",
    BS: "Bahamas",
    BH: "Baréin",
    BD: "Bangladés",
    BB: "Barbados",
    BY: "Bielorrusia",
    BE: "Bélgica",
    BZ: "Belice",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bután",
    BO: "Bolivia",
    BA: "Bosnia y Herzegovina",
    BW: "Botsuana",
    BV: "Isla Bouvet",
    BR: "Brasil",
    IO: "Territorio Británico del Océano Índico",
    BN: "Brunéi",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Camboya",
    CM: "Camerún",
    CA: "Canadá",
    CV: "Cabo Verde",
    KY: "Islas Caimán",
    CF: "República Centroafricana",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Isla de navidad",
    CC: "Islas Cocos",
    CO: "Colombia",
    KM: "Comoras",
    CG: "Congo",
    CD: "República Democrática del Congo",
    CK: "Islas Cook",
    CR: "Costa Rica",
    CI: "Costa de Marfil",
    HR: "Croacia",
    CU: "Cuba",
    CY: "Chipre",
    CZ: "República Checa",
    DK: "Dinamarca",
    DJ: "Yibuti",
    DM: "Dominica",
    DO: "República Dominicana",
    EC: "Ecuador",
    EG: "Egipto",
    SV: "El Salvador",
    GQ: "Guinea Ecuatorial",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Etiopía",
    FK: "Malvinas",
    FO: "Islas Faroe",
    FJ: "Fiji",
    FI: "Finlandia",
    FR: "Francia",
    GF: "Guayana Francesa",
    PF: "Polinesia Francesa",
    TF: "Territorios Australes Franceses",
    GA: "Gabón",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Alemania",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Grecia",
    GL: "Groenlandia",
    GD: "Granada",
    GP: "Guadalupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bisáu",
    GY: "Guyana",
    HT: "Haití",
    HM: "Islas Heard y McDonald",
    VA: "Ciudad del Vaticano",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungría",
    IS: "Islandia",
    IN: "India",
    ID: "Indonesia",
    IR: "Irán",
    IQ: "Iraq",
    IE: "Irlanda",
    IM: "Isla de Man",
    IL: "Israel",
    IT: "Italia",
    JM: "Jamaica",
    JP: "Japón",
    JE: "Jersey",
    JO: "Jordania",
    KZ: "Kazajistán",
    KE: "Kenia",
    KI: "Kiribati",
    KR: "Corea del Sur",
    KP: "Corea del Norte",
    KW: "Kuwait",
    KG: "Kirguistán",
    LA: "Laos",
    LV: "Letonia",
    LB: "Líbano",
    LS: "Lesoto",
    LR: "Liberia",
    LY: "Gran Yamahiriya Árabe Libia Popular Socialista",
    LI: "Liechtenstein",
    LT: "Lituania",
    LU: "Luxemburgo",
    MO: "Macao",
    MK: "Macedonia del Norte",
    MG: "Madagascar",
    MW: "Malaui",
    MY: "Malasia",
    MV: "Maldivas",
    ML: "Mali",
    MT: "Malta",
    MH: "Islas Marshall",
    MQ: "Martinica",
    MR: "Mauritania",
    MU: "Mauricio",
    YT: "Mayotte",
    MX: "México",
    FM: "Micronesia",
    MD: "Moldavia",
    MC: "Mónaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Marruecos",
    MZ: "Mozambique",
    MM: "Birmania",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Países Bajos",
    AN: "Antillas Neerlandesas",
    NC: "Nueva Caledonia",
    NZ: "Nueva Zelanda",
    NI: "Nicaragua",
    NE: "Níger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Isla Norfolk",
    MP: "Islas Marianas del Norte",
    NO: "Noruega",
    OM: "Omán",
    PK: "Pakistán",
    PW: "Palaos",
    PS: "Territorios Palestinos",
    PA: "Panamá",
    PG: "Papúa Nueva Guinea",
    PY: "Paraguay",
    PE: "Perú",
    PH: "Filipinas",
    PN: "Islas Pitcairn",
    PL: "Polonia",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Catar",
    RE: "Isla Reunión",
    RO: "Rumanía",
    RU: "Rusia",
    RW: "Ruanda",
    BL: "San Bartolomé",
    SH: "Santa Helena",
    KN: "San Cristóbal y Nieves",
    LC: "Santa Lucía",
    MF: "San Martín",
    PM: "San Pedro y Miquelón",
    VC: "San Vicente y las Granadinas",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Santo Tomé y Príncipe",
    SA: "Arabia Saudí",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leona",
    SG: "Singapur",
    SK: "Eslovaquia",
    SI: "Eslovenia",
    SB: "Islas Salomón",
    SO: "Somalia",
    ZA: "Sudáfrica",
    GS: "Georgia del Sur",
    ES: "España",
    LK: "Sri Lanka",
    SD: "Sudán",
    SR: "Surinam",
    SJ: "Svalbard y Jan Mayen",
    SZ: "Esuatini",
    SE: "Suecia",
    CH: "Suiza",
    SY: "Siria",
    TW: "Taiwán",
    TJ: "Tayikistán",
    TZ: "Tanzania",
    TH: "Tailandia",
    TL: "Timor Oriental",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad y Tobago",
    TN: "Túnez",
    TR: "Turquía",
    TM: "Turkmenistán",
    TC: "Islas Turcas y Caicos",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ucrania",
    AE: "Emiratos Árabes Unidos",
    GB: "Reino Unido",
    US: "Estados Unidos",
    UM: "Islas Ultramarinas Menores de Estados Unidos",
    UY: "Uruguay",
    UZ: "Uzbekistán",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Islas Vírgenes Británicas",
    VI: "Islas Vírgenes de los Estados Unidos",
    WF: "Wallis y Futuna",
    EH: "Sahara Occidental",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabue",
  };
  return (
    <>
      <section
        className={`dark:brightness-50 ${
          imgWeather[weatherInfo?.weather[0].main]
        } bg-center bg-cover bg-no-repeat absolute h-screen w-full -z-10 `}
      ></section>
      <section className="text-center ">
        <h2 className="p-4 font-extrabold text-xl text-black dark:text-white  ">
          {weatherInfo?.name}, {iso[weatherInfo?.sys.country]}
        </h2>
        <section className="grid gap-4 sm:grid-cols-[auto_auto]    ">
          {/* Section superior  */}
          <section
            className="dark:bg-black/25 p-10 rounded-[50px] 
        grid grid-cols-2 items-center bg-slate-600/70 text-black dark:text-white "
          >
            <h4 className="col-span-2 font-semibold text-lg">
              {weatherInfo?.weather[0].description}
            </h4>
            <span className="text-[50px]  ">
              {resultTempConversion} °{isCelsius ? "C" : "F"}
            </span>
            <div className="flex flex-row justify-center">
              <img
                src={`/img/${iconWeather[weatherInfo?.weather[0].main]}`}
                alt=""
              />
            </div>
          </section>
          {/* Section inferior  */}
          <section
            className="dark:bg-black/25 p-10 py-4 rounded-[20px]
        grid grid-cols-3 items-center sm:grid-cols-1 font-extrabold  bg-slate-600/70 text-black dark:text-white  "
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
          className="mt-4 dark:bg-indigo-500/50 p-2 px-8 rounded-3xl text-sm  bg-white/50 text-black  dark:text-white"
        >
          {isCelsius ? "Change to F" : "Change to C"}
        </button>
      </section>
    </>
  );
};
export default Weather;
