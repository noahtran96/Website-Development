import { useNavigate, useParams } from "react-router";
import { fetchCoinData } from "../api/coinGecko";
import type { Coin } from "../api/coinGecko";
import { useEffect, useState } from "react";

export const CoinDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState<Coin | null>(null);
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
        <div className="coin-header">
          <div className="coin-title">
            <img src={coin.image.large} alt={coin.name} />
            <div>
              <h1>{coin.name}</h1>
              <p>{coin.symbol.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
