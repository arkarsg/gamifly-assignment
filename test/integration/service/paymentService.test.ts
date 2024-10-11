// orderService.test.ts
import { createOrder } from "../../../src/service/order/orderService";
import { ICreateOrder } from "../../../src/service/order/types";
import { createPayment } from "../../../src/service/payment/paymentService";
import { ICreatePayment } from "../../../src/service/payment/types";
import { CurrencyType, GatewayType, StatusType, type Order } from "../../../src/utils/types";

describe("Order Service", () => {
  let order: ICreateOrder;
  let testOrder: Order

  beforeAll(async () => {
    order = {
      price: "100.00",
      currency: CurrencyType.USD,
      customerName: "Test Customer",
    };
    testOrder = await createOrder(order) as Order;
  });

  test("createPayment should insert a new payment", async () => {
    const testPayment: ICreatePayment = {
      orderId: testOrder.id,
      paymentGateway: GatewayType.PAYPAL
    };

    const newPayment = await createPayment(testPayment);
  
    expect(newPayment).toBeDefined();
    if (newPayment) {
      expect(newPayment.orderId).toBe(testOrder.id);
      expect(newPayment.paymentGateway).toBe(GatewayType.PAYPAL);
      expect(newPayment.status).toBe(StatusType.PENDING);
    }
  });

  test("createPayment does not insert invalid order", async () => {
    const res = await createPayment({
        orderId: 123456,
        paymentGateway: GatewayType.BRAINTREE,
    })

    expect(res).toBeNull();
  })
});
