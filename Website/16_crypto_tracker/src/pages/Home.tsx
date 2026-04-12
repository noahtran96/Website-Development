import { useEffect, useState } from "react";
import { CryptoCard } from "../components/CryptoCard";
import { fetchCryptos, type Crypto } from "../api/coinGecko";

export const Home = () => {
  const [cryptoList, setCryptoList] = useState<Crypto[]>([]);
  const [filteredList, setFilteredList] = useState<Crypto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("market_cap_rank");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const data = await fetchCryptos();
        setCryptoList(data);
        console.log(data);
      } catch (err) {
        console.error(`Error fetching crypto: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCryptoData();
  }, []);

  useEffect(() => {
    const filterAndSort = () => {
      const filtered = cryptoList.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      filtered.sort((a, b) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name);
          case "price":
            return a.current_price - b.current_price;
          case "price_desc":
            return b.current_price - a.current_price;
          case "change":
            return (
              a.price_change_percentage_24h - b.price_change_percentage_24h
            );
          case "market_cap":
            return a.market_cap - b.market_cap;
          default:
            return a.market_cap_rank - b.market_cap_rank;
        }
      });

      setFilteredList(filtered);
    };

    filterAndSort();
  }, [sortBy, cryptoList, searchQuery]);

  return (
    <div className="app">
      {/* navbar */}
      <header className="header">
        <div className="header-content">
          {/* logo */}
          <div className="logo-section">
            <h1>🚀 Crypto Tracker</h1>
            <p>Real-time cryptocurrency prices and market data</p>
          </div>
          {/* searchbar */}
          <div className="search-section">
            <input
              type="text"
              placeholder="Search cryptos..."
              className="search-input"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
        </div>
      </header>

      {/* display control */}
      <div className="controls">
        <div className="filter-group">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="market_cap_rank">Rank</option>
            <option value="name">Name</option>
            <option value="price">Price (Low to High)</option>
            <option value="price_desc">Price (High to Low)</option>
            <option value="change">24h Change</option>
            <option value="market_cap">Market Cap</option>
          </select>
        </div>
        <div className="view-toggle">
          <button
            className={viewMode === "grid" ? "active" : ""}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={viewMode === "list" ? "active" : ""}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
        </div>
      </div>

      {/* crypto list */}
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading crypto data...</p>
        </div>
      ) : (
        <div className={`crypto-container ${viewMode}`}>
          {filteredList.map((crypto: Crypto) => (
            <CryptoCard crypto={crypto} key={crypto.id} />
          ))}
        </div>
      )}

      {/* footer */}
      <footer className="footer">
        <p>Data provided by CoinGecko API • Updated every 30 seconds </p>
      </footer>
    </div>
  );
};
