import { useEffect, useState } from "react";
import { fetchCryptos } from "../api/coinGecko";

export const Home = () => {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const data = await fetchCryptos();
        setCryptoList(data);
      } catch (err) {
        console.error(`Error fetching crypto: ${err}`);
      }
    };
    fetchCryptoData();
  }, []);

  return <div>This is the home page</div>;
};
