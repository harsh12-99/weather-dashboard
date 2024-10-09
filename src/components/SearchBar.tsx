import React, { SetStateAction } from "react";

interface ISearchBar {
  city: string;
  setCity: React.Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchBar: React.FC<ISearchBar> = ({ city, setCity, handleSearch }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Weather Dashboard</h1>

      <div className="flex my-5">
        <input
          type="text"
          placeholder="Search city..."
          className="border p-2 rounded-md shadow-md"
          aria-label="search-box"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={handleSearch}
          aria-label="search-button"
          className="bg-blue-500 text-white p-2 ml-2 rounded-md shadow-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
