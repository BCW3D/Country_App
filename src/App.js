import { Container, Row } from "react-bootstrap";
import Countries from "./components/Countries";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState({
    isLoading: false,
    countries: [],
    isError: "",
  });

  const [filterCountries, setFilteredCountries] = useState(data.countries);

  const handleRemove = (name) => {
    const filtered = filterCountries.filter(
      (country) => country.name.official !== name
    );

    setData({ ...data, countries: filtered });
  };

  const handleChange = (name) => {
    const lowerCaseName = name.toLowerCase();
    const newCountries = filterCountries.filter((country) => {
      const countryName = country.name.official.toLowerCase();
      return countryName.startsWith(lowerCaseName);
    });

    setData({ ...data, countries: newCountries });
  };

  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async (url) => {
    setData((data) => {
      return { ...data, isLoading: true };
    });
    try {
      const response = await fetch(url);
      const listOfCountry = await response.json();

      setData((data) => {
        return {
          ...data,
          isLoading: false,
          countries: listOfCountry,
        };
      });
      setFilteredCountries(listOfCountry);
    } catch (error) {
      setData((data) => {
        return {
          ...data,
          isError: error.message,
        };
      });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <div style={{ textAlign: "center" }}>
      <header className="App-header bg-primary text-white pt-3 pb-3">
        <h1>Country App</h1>
      </header>
      <Container>
        <Search onChange={handleChange} />
        <Row>
          {data.isLoading && <h1>Loading...</h1>}
          {data.countries &&
            data.countries.map((country) => (
              <Countries {...country} key={uuidv4()} onRemove={handleRemove} />
            ))}
          {data.isError && <p>{data.isError}</p>}
        </Row>
      </Container>
    </div>
  );
}

export default App;
