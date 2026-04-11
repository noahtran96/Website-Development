const BASE_URL = "https://api.coingecko.com/api/v3";

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

export const fetchCryptos = async () => {
  const response = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cryptos");
  }

  return response.json();
};

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
}

export const fetchCoinData = async (id: string): Promise<Coin> => {
  const response = await fetch(
    `${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coin data");
  }

  return response.json();
};
