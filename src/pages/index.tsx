import { useState } from "react";
import Head from "next/head";
import CityWeather from "@/components/CityWeather";
import { WeatherData } from "@/types/CityWeather";
import { fetchWeather } from "@/api/fetchWeather";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(city as string);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city) {
      getWeather();
    }
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <Head>
        <title>Weather Dashboard</title>
        <meta name="description" content="Get the latest weather updates." />
      </Head>

      <div>
        <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />

        <CityWeather weather={weather} loading={loading} error={error} />
      </div>
    </div>
  );
}
