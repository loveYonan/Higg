export interface CryptoOption {
  name: string;
  symbol: string;
  address: string;
  icon: string;
  qrCode: string;
  warning: string;
  // URL or base64 string
}

export interface CryptoPrices {
  [symbol: string]: number;
}

export interface CryptoBalance {
  [symbol: string]: number;
}
