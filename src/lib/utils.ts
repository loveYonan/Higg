import { UserPlan } from "@/features/transactions/types";
import { CryptoOption, CryptoPrices } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Bitcoin,
  BriefcaseBusiness,
  ChartColumnStacked,
  Home,
  User,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateInviteCode(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function snakeCaseToTitleCase(str: string) {
  return str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const routes = [
  {
    href: "/",
    label: "Features",
  },
  {
    href: "/#pricing",
    label: "Pricing",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href: "/support",
    label: "Support",
  },
];

export const dashboardRoutes = [
  {
    label: "Home",
    href: `/dashboard`,
    icon: Home,
  },
  {
    label: "Deposit",
    href: `/dashboard/invest`,
    icon: ChartColumnStacked,
  },
  {
    label: "Transactions",
    href: `/dashboard/transactions`,
    icon: BriefcaseBusiness,
  },

  {
    label: "Withdraw",
    href: `/dashboard/withdraws`,
    icon: Bitcoin,
  },
  {
    label: "Profile",
    href: `/dashboard/profile`,
    icon: User,
  },
];

export const cryptoOptions: CryptoOption[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    address: "bc1qea6sewnv2c9gcy5rfcylde3je6pkvxq79qfdxa",
    icon: "/bitcoin.png",
    qrCode: "http://bc1qea6sewnv2c9gcy5rfcylde3je6pkvxq79qfdxa/",
    warning:
      "Only send Bitcoin(BTC) assets to this address, sending other assets will result in loss of funds.",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    address: "0xe25670635789A6f34a17D24B3c325791F9A1E53e",
    icon: "/ethereum.png",
    qrCode: "http://0xe25670635789A6f34a17D24B3c325791F9A1E53e/",
    warning:
      "Only send Ethereum(ETH) assets to this address, sending other assets will result in loss of funds.",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    address: "rpJosPyckQaPyoEgsNf79xZ1qBWYsqxfvp",
    icon: "/tether.png",
    qrCode: "http://rpJosPyckQaPyoEgsNf79xZ1qBWYsqxfvp/",
    warning:
      "Only send Ripple(XRP) assets to this address, sending other assets will result in loss of funds.",
  },

  {
    name: "Tether (ERC20)",
    symbol: "USDT",
    address: "0xe25670635789A6f34a17D24B3c325791F9A1E53e",
    icon: "/tether.png",
    qrCode: "http://0xe25670635789A6f34a17D24B3c325791F9A1E53e/",
    warning:
      "Only send USDT(ERC20) assets to this address, sending other assets will result in loss of funds.",
  },
  {
    name: "BNB Smart Chain",
    symbol: "BNB",
    address: "0xe25670635789A6f34a17D24B3c325791F9A1E53e",
    icon: "/bnb.png",
    qrCode: "http://0xe25670635789A6f34a17D24B3c325791F9A1E53e/",
    warning:
      "Only send BNB Smart Chain(BNB ERC20) assets to this address, sending other assets will result in loss of funds.",
  },
  {
    name: "Solana",
    symbol: "SOL",
    address: "2mwabBzPkq5UGccevwmjpMKRzr9eh4qfTS5tGkUYjTSU",
    icon: "/sol.png",
    qrCode: "http://2mwabBzPkq5UGccevwmjpMKRzr9eh4qfTS5tGkUYjTSU/",
    warning:
      "Only send Solana(SOL) assets to this address, sending other assets will result in loss of funds.",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    address: "0xe25670635789A6f34a17D24B3c325791F9A1E53e",
    icon: "/poly.png",
    qrCode: "http://0xe25670635789A6f34a17D24B3c325791F9A1E53e/",
    warning:
      "Only send Polygon(MATIC) assets to this address, sending other assets will result in loss of funds.",
  },
];

export const fetchCryptoPrices = async (
  symbols: string[]
): Promise<CryptoPrices> => {
  const idsMap: { [key: string]: string } = {
    BTC: "bitcoin",
    ETH: "ethereum",
    XRP: "ripple",
    USDT: "tether",
    BNB: "binancecoin",
    SOL: "solana",
    MATIC: "matic-network",
  };

  const ids = symbols.map((symbol) => idsMap[symbol]).join(",");
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch crypto prices");
  }

  const data = await response.json();
  const prices: CryptoPrices = {};

  symbols.forEach((symbol) => {
    const id = idsMap[symbol];
    prices[symbol] = data[id]?.usd || 0;
  });

  return prices;
};

export function formatCurrency(value: number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

export function calculateDaysInvested(investmentDate: Date): number {
  const currentDate = new Date();
  const diffTime = currentDate.getTime() - investmentDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return diffDays;
}

export function calculateReturnDay(investmentDay: Date, plan: UserPlan): Date {
  const returnDate = new Date(investmentDay);
  switch (plan) {
    case UserPlan.HALFYEAR:
      returnDate.setMonth(returnDate.getMonth() + 6);
      break;
    case UserPlan.YEARLY:
      returnDate.setFullYear(returnDate.getFullYear() + 1);
      break;
  }
  return returnDate;
}

export function calculateDailyInterest(principal: number): number {
  const dailyRate = 0.013; // 30% daily increase
  return principal * dailyRate;
}

export function calculateTotalInterest(
  principal: number,
  investmentDate: Date
): number {
  const daysInvested = calculateDaysInvested(investmentDate);
  let totalInterest = 0;
  let currentPrincipal = principal;

  for (let i = 0; i < daysInvested; i++) {
    const dailyInterest = calculateDailyInterest(currentPrincipal);
    totalInterest += dailyInterest;
    currentPrincipal += dailyInterest; // Compound interest
  }
  return totalInterest;
}

export function calculateTotalBalance(
  principal: number,
  investmentDate: Date
): number {
  const totalInterest = calculateTotalInterest(principal, investmentDate);
  // const bonus = principal * bonusRate; // Bonus based on initial principal
  return principal + totalInterest;
}
