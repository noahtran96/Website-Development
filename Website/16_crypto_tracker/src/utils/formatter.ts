/**
 * Formats a cryptocurrency price for display
 * - For prices < 0.01: Returns 8 decimal places (ideal for low-value/meme coins)
 * - For prices >= 0.01: Returns a standard USD currency format (with $ and commas)
 * @param price - The raw numerical price value (e.g., 0.00001234 or 50000)
 * @returns A formatted string ready for the UI
 */

export const formatPrice = (price: number): string => {
  if (price < 0.01) return price.toFixed(8);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};
