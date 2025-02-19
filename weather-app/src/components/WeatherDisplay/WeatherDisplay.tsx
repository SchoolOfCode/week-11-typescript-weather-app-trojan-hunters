interface WeatherDisplayProps {
  display: {
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
      precipitation: string;
      pressure_msl: string;
      wind_speed_10m: string;
      wind_direction_10m: string;
      wind_gusts_10m: string;
    };
    hourly: {
      time: number[]; // Array of Unix timestamps
      temperature_2m: number[]; // Array of temperatures in °C
      precipitation: number[]; // Array of precipitation values
      pressure_msl: number[]; // Array of pressure values in hPa
      wind_speed_10m: number[]; // Array of wind speeds in km/h
      wind_direction_10m: number[]; // Array of wind directions in degrees
      wind_gusts_10m: number[]; // Array of wind gusts in km/h
    };
  };
}

export default function WeatherDisplay({
  display,
}: WeatherDisplayProps): JSX.Element {
  return (
    <div>
      <p>{`The temperature is ${display.hourly.temperature_2m[0]} ${display.hourly_units.temperature_2m}`}</p>
      <p>{`The precipitation is ${display.hourly.precipitation[0]} ${display.hourly_units.precipitation}`}</p>
      <p>{`The pressure is ${display.hourly.pressure_msl[0]} ${display.hourly_units.pressure_msl}`}</p>
      <p>{`The wind speed is ${display.hourly.wind_speed_10m[0]} ${display.hourly_units.wind_speed_10m}`}</p>
      <p>{`The wind direction is ${display.hourly.wind_direction_10m[0]} ${display.hourly_units.wind_direction_10m}`}</p>
      <p>{`The wind gustsis ${display.hourly.wind_gusts_10m[0]} ${display.hourly_units.wind_gusts_10m}`}</p>
    </div>
  );
}
