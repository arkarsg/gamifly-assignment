export enum CurrencyType {
  USD = "USD",
  EUR = "EUR",
  THB = "THB",
  HKD = "HKD",
  SGD = "SGD",
  AUD = "AUD",
}

export interface Order {
  id: number;
  price: string;
  currency: "USD" | "EUR" | "THB" | "HKD" | "SGD" | "AUD";
  customerName: string;
  createdAt: Date | null;
}