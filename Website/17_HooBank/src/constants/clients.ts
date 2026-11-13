import { airbnb, binance, coinbase, dropbox } from "../assets";

export interface Client {
  id: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
