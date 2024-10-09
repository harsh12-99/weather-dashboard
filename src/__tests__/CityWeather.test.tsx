import { render, screen } from "@testing-library/react";
import { WeatherData } from "@/types/CityWeather";
import CityWeather from "@/components/CityWeather";

// Mock the WeatherData structure
const mockWeatherData: WeatherData = {
  location: {
    name: "Indore",
    country: "India",
    region: "Madhya Pradesh",
    localtime: "2024-10-09 08:58",
  },
  current: {
    temp_c: 15,
    temp_f: 15,
    condition: {
      text: "Partly cloudy",
      icon: "http://example.com/icon.png",
    },
  },
};

// Test for loading state
test("renders loading state", () => {
  render(<CityWeather weather={null} error={null} loading={true} />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

// Test for error state
test("renders error message", () => {
  const errorMessage = "Failed to fetch weather data";

  render(<CityWeather weather={null} error={errorMessage} loading={false} />);

  expect(screen.getByText(errorMessage)).toBeInTheDocument();
});

// Test for successful weather data display
test("renders weather data", () => {
  render(
    <CityWeather weather={mockWeatherData} error={null} loading={false} />
  );

  expect(screen.getByText(/Indore/i)).toBeInTheDocument();
  expect(screen.getByText(/temperature:/i)).toHaveTextContent(
    "Temperature: 15 °C"
  );
  expect(screen.getByText(/condition:/i)).toHaveTextContent(
    "Condition: Partly cloudy"
  );
  expect(screen.getByRole("img", { name: /weather icon/i })).toHaveAttribute(
    "src",
    "http://example.com/icon.png"
  );
});
