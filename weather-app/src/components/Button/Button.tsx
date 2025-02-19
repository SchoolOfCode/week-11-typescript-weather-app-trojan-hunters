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

export default function Button(): JSX.Element {
  async function weatherFetch(): Promise<Result | undefined> {
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
      console.log(apiResult);
      return apiResult;
    } catch {
      console.error("Error fetching");
      return undefined;
    }
  }

  return (
    <>
      <button onClick={weatherFetch}>Click me</button>
    </>
  );
}
