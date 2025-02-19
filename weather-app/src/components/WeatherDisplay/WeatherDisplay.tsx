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
    };
    hourly: {
      time: number[]; // Array of Unix timestamps
      temperature_2m: number[]; // Array of temperatures in °C
    };
  };
}

export default function WeatherDisplay({
  display,
}: WeatherDisplayProps): JSX.Element {
  return (
    <div>
      <h1>{`The temperature in London is ${display.hourly.temperature_2m[0]}`}</h1>
    </div>
  );
}
