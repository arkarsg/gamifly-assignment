import { GatewayType } from "~/utils/types";


export interface ICreatePayment {
  orderId: number;
  paymentGateway: GatewayType;
}
