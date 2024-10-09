import { WeatherData } from "@/types/CityWeather";

interface ICityWeather {
  weather: WeatherData | null;
  error: string | null;
  loading: boolean;
}

const CityWeather: React.FC<ICityWeather> = ({ weather, error, loading }) => {
  if (loading) {
    return (
      <div className="bg-white shadow-md rounded p-4 max-w-sm mx-auto">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white shadow-md rounded p-4 max-w-sm mx-auto">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      {weather && (
        <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
          <h2 className="text-2xl font-bold">
            {weather.location.name} ({weather.location.country})
          </h2>

          <div className="my-3">
            <h3 className="font-bold">City Details:</h3>

            <p>Region: {weather.location.region}</p>
            <p>Local Time: {weather.location.localtime}</p>
          </div>

          <hr />

          <div className="mt-3">
            <h3 className="font-bold">Weather Details:</h3>

            <p className="text-gray-700">
              Temperature: {weather.current.temp_c} °C /{" "}
              {weather.current.temp_f} °F
            </p>
            <p className="text-gray-700">
              Condition: {weather.current.condition.text}
            </p>

            <img src={weather.current.condition.icon} alt="Weather icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default CityWeather;
