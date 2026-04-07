import type { Crypto } from "../api/coinGecko";

interface CryptoCardProps {
  crypto: Crypto;
}

export const CryptoCard = ({ crypto }: CryptoCardProps) => {
  return (
    <div className="crypto-card">
      {/* card header */}
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

      <div className="crypto-price">
        <p className="price">{crypto.current_price}</p>
      </div>
    </div>
  );
};
