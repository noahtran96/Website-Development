import { useParams } from "react-router";

export const CoinDetail = () => {
  const { id } = useParams();
  return <div>This is the coin detail page</div>;
};
