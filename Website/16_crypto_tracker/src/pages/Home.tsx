import { useEffect, useState } from "react";
import { CryptoCard } from "../components/CryptoCard";
import { fetchCryptos, type Crypto } from "../api/coinGecko";

export const Home = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="app">
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading crypto data...</p>
        </div>
      ) : (
        <div className="crypto-container">
          {cryptoList.map((crypto: Crypto, key: number) => (
            <CryptoCard crypto={crypto} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};
