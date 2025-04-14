import axios from "axios";

export interface CryptoPrices {
  [symbol: string]: number;
}

export async function fetchCryptoPrices(
  symbols: string[]
): Promise<CryptoPrices> {
  try {
    const ids = symbols.join(",");
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price`,
      {
        params: {
          ids: ids.toLowerCase(),
          vs_currencies: "usd",
        },
      }
    );

    const prices: CryptoPrices = {};
    symbols.forEach((symbol) => {
      const price = response.data[symbol.toLowerCase()]?.usd;
      if (price) {
        prices[symbol] = price;
      }
    });
    return prices;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw new Error("Failed to fetch cryptocurrency prices");
  }
}
