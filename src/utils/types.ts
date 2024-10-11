export enum CurrencyType {
  USD = "USD",
  EUR = "EUR",
  THB = "THB",
  HKD = "HKD",
  SGD = "SGD",
  AUD = "AUD",
}

export enum GatewayType {
  BRAINTREE = "BRAINTREE",
  PAYPAL = "PAYPAL"
}

export enum StatusType {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED"
}

export interface Order {
  id: number;
  price: string;
  currency: "USD" | "EUR" | "THB" | "HKD" | "SGD" | "AUD";
  customerName: string;
  createdAt: Date | null;
}

export interface Payment {
  id: number;
  orderId: number;
  paymentGateway: "BRAINTREE" | "PAYPAL";
  status: "PENDING" | "COMPLETED" | "FAILED";
  createdAt: Date | null;
  updatedAt: Date | null;
}