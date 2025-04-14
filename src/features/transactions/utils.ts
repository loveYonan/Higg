import { UserPlan } from "./types";

export function generateUniqueCode(word: string): string {
  // Generate a random unique code using a combination of letters and numbers
  const uniqueCode = Math.random().toString(36).substring(2, 8); // Generates a string of 6 random characters
  return `${word}-${uniqueCode}`;
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

// 1. Calculate how many days have passed since investment
export function calculateDaysInvested(investmentDate: Date): number {
  const currentDate = new Date();
  const diffTime = currentDate.getTime() - new Date(investmentDate).getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days
}

// 2. Get daily rate based on monthly 30% interest
function getDailyRateFromMonthly(monthlyRatePercent: number): number {
  const monthlyRateDecimal = monthlyRatePercent / 100;
  return Math.pow(1 + monthlyRateDecimal, 1 / 30) - 1; // Daily rate compounded to 30% monthly
}

// 3. Calculate total balance with daily compounding
export function calculateCompoundedBalance(
  investmentAmount: number,
  investmentDate: Date,
  monthlyRatePercent: number = 30
): number {
  const days = calculateDaysInvested(investmentDate);
  const dailyRate = getDailyRateFromMonthly(monthlyRatePercent);

  return investmentAmount * Math.pow(1 + dailyRate, days);
}

// 4. Optional: Calculate total interest earned only
export function calculateInterestOnly(
  investmentAmount: number,
  investmentDate: Date,
  monthlyRatePercent: number = 30
): number {
  const total = calculateCompoundedBalance(
    investmentAmount,
    investmentDate,
    monthlyRatePercent
  );
  return total - investmentAmount;
}

// const initialInvestment = 1000; // Example principal amount
// const investmentDate = new Date("2024-01-01"); // Investment start date
// const bonusRate = 0.1; // 10% bonus rate

// // Calculate return day
// const returnDay = calculateReturnDay(investmentDate, UserPlan.MONTHLY);
// console.log("Return Day:", returnDay);

// // Calculate daily interest
// const dailyInterest = calculateDailyInterest(initialInvestment);
// console.log("Daily Interest:", dailyInterest);

// // Calculate total interest dynamically based on current date
// const totalInterest = calculateTotalInterest(initialInvestment, investmentDate);
// console.log("Total Interest:", totalInterest);

// // Calculate total balance with bonus dynamically
// const totalBalance = calculateTotalBalance(
//   initialInvestment,
//   investmentDate,
//   bonusRate
// );
// console.log("Total Balance with Bonus:", totalBalance);
