import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import { useState } from "react";

// store weather data in a state, to be passed down to weather display component as a prop
// create a state variable to store weather data
// set initial state to undefined
// create a function to update weather data state
// pass setWeatherData function to Button component to update weather data state
// pass weather data state to weather display component to display weather data
// import useState hook from react
// Result interface

interface Result {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: number[]; // Array of Unix timestamps
    temperature_2m: number[]; // Array of temperatures in °C
  };
}

function App() {
  const [weatherData, setWeatherData] = useState<Result | undefined>(undefined);

  const fetchWeatherData = async (): Promise<Result | undefined> => {
    try {
      const data = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m&timeformat=unixtime&timezone=GMT&forecast_days=1",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log("It fired");
      const apiResult = await data.json();
      console.log("weatherData", weatherData);
      //  apiResult.hourly.temperature_2m[0] - This one for temperature
      //apiResult.hourly_units.temperature_2m - This one for unit
      setWeatherData(apiResult);
      return apiResult;
    } catch {
      console.error("Error fetching");
      return undefined;
    }
  };

  return (
    <>
      <Button onClick={fetchWeatherData} />
      <Header />
    </>
  );
}

export default App;
