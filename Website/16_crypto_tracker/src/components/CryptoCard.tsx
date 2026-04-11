import { Link } from "react-router";
import type { Crypto } from "../api/coinGecko";
import { formatPrice, formatMarketCap } from "../utils/formatter";

interface CryptoCardProps {
  crypto: Crypto;
}

export const CryptoCard = ({ crypto }: CryptoCardProps) => {
  return (
    <Link to={`/coin/${crypto.id}`} style={{ textDecoration: "none" }}>
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
          {/* stat 1 - market cap */}
          <div className="stat">
            <span className="stat-label">Market Cap</span>
            <span className="stat-value">
              {formatMarketCap(crypto.market_cap)}
            </span>
          </div>

          {/* stat 2 - total volume */}
          <div className="stat">
            <span className="stat-label">Volume</span>
            <span className="stat-value">
              {formatMarketCap(crypto.total_volume)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
