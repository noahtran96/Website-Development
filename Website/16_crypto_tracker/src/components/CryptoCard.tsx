import type { Crypto } from "../api/coinGecko";
import { formatPrice } from "../utils/formatter";

interface CryptoCardProps {
  crypto: Crypto;
}

export const CryptoCard = ({ crypto }: CryptoCardProps) => {
  return (
    <div className="crypto-card">
      {/* crypto header */}
      <div className="crypto-header">
        <div className="crypto-info">
          <img src={crypto.image} alt={crypto.name} />
          <div>
            <h3>{crypto.name}</h3>
            <p className="symbol">{crypto.symbol.toUpperCase()}</p>
            <span className="rank">{crypto.market_cap_rank}</span>
          </div>
        </div>
      </div>

      {/* crypto price */}
      <div className="crypto-price">
        <p className="price">{formatPrice(crypto.current_price)}</p>
        <p
          className={`change ${crypto.price_change_percentage_24h >= 0 ? "positive" : "negative"}`}
        >
          {crypto.price_change_percentage_24h >= 0 ? "↑" : "↓"}{" "}
          {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
        </p>
      </div>

      {/* crypto stats */}
      <div className="crypto-stats">
        <div className="stat">
          <span className="stat-label">Market Cap</span>
          <span className="stat-value">{crypto.market_cap}</span>
        </div>
      </div>
    </div>
  );
};
