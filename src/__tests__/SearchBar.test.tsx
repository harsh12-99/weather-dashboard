import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar Component", () => {
  const city = "New York";
  const setCity = jest.fn();
  const handleSearch = jest.fn();

  beforeEach(() => {
    render(
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
    );
  });

  test("renders the SearchBar with correct elements", () => {
    expect(
      screen.getByRole("heading", { name: /Weather Dashboard/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  test("calls setCity on input change", () => {
    const input = screen.getByLabelText("search-box");
    fireEvent.change(input, { target: { value: "Los Angeles" } });

    expect(setCity).toHaveBeenCalledWith("Los Angeles");
  });

  test("calls handleSearch on button click", () => {
    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalled();
  });
});
