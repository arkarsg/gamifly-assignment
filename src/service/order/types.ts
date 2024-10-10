import { CurrencyType } from "~/utils/types";


export interface ICreateOrder {
  price: string;
  currency: CurrencyType;
  customerName: string;
}
