import { WeatherData } from "@/types/CityWeather";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=${city}&key=1004a5f481d84192ae8105919240910&units=metric`
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error.message || "Failed to fetch weather data");
  }

  return await response.json();
};
