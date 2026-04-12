import { useNavigate, useParams } from "react-router";
import { fetchCoinData } from "../api/coinGecko";
import type { Coin } from "../api/coinGecko";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatter";
import { Line, LineChart, ResponsiveContainer } from "recharts";

export const CoinDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState<Coin | null>(null);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const loadCoinData = async () => {
      try {
        const data = await fetchCoinData(id);
        setCoin(data);
        console.log(data);
      } catch (err) {
        console.error(`Error fetching crypto: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadCoinData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="app">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading coin data...</p>
        </div>
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="app">
        <div className="no-results">
          <p>Coin not found</p>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    );
  }

  const priceChange = coin.market_data.price_change_percentage_24h || 0;
  const isPositive = priceChange >= 0;
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
          {/* go back button */}
          <button onClick={() => navigate("/")} className="back-button">
            ← Back to List
          </button>
        </div>
      </header>
      {/* coin details */}
      <div className="coin-detail">
        {/* coin header */}
        <div className="coin-header">
          <div className="coin-title">
            <img src={coin.image.large} alt={coin.name} />
            <div>
              <h1>{coin.name}</h1>
              <p className="symbol">{coin.symbol.toUpperCase()}</p>
            </div>
          </div>
          <span className="rank">Rank #{coin.market_data.market_cap_rank}</span>
        </div>
        {/* coin price */}
        <div className="coin-price-section">
          {/* current price */}
          <div className="current-price">
            <h2>{formatPrice(coin.market_data.current_price.usd)}</h2>
            <span
              className={`change-badge ${isPositive ? "positive" : "negative"}`}
            >
              {isPositive ? "↑" : "↓"} {Math.abs(priceChange).toFixed(2)}%
            </span>
          </div>
          {/* price ranges */}
          <div className="price-ranges">
            <div className="price-range">
              <span className="range-label">24h High</span>
              <span className="range-value">
                {formatPrice(coin.market_data.high_24h.usd)}
              </span>
            </div>
            <div className="price-range">
              <span className="range-label">24h Low</span>
              <span className="range-value">
                {formatPrice(coin.market_data.low_24h.usd)}
              </span>
            </div>
          </div>
        </div>
        {/* coin chart */}
        <div className="chart-section">
          <h3>Price Chart (7 Days)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}></LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      ;
    </div>
  );
};
