// orderService.test.ts
import { createOrder, getAllOrders } from "../../src/service/order/orderService";
import { ICreateOrder } from "../../src/service/order/types";
import { CurrencyType } from "../../src/utils/types";

describe("Order Service", () => {
  let testOrder: ICreateOrder;

  beforeAll(async () => {
    testOrder = {
      price: "100.00",
      currency: CurrencyType.USD,
      customerName: "Test Customer",
    };
  });

  test("createOrder should insert a new order", async () => {
    const newOrder = await createOrder(testOrder);

    expect(newOrder).toBeDefined();
    if (newOrder) {
      expect(newOrder.price).toBe("100.00000");
      expect(newOrder.currency).toBe(testOrder.currency);
      expect(newOrder.customerName).toBe(testOrder.customerName);
    }
  });

  test("createOrder does not insert invalid order", async () => {
    const res = await createOrder({
        currency: CurrencyType.AUD,
        customerName: "test",
        price: "not-a-number",
    })

    expect(res).toBeNull();
  })

  test("getAllOrders should return all orders", async () => {
    const orders = await getAllOrders();

    expect(orders.length).toBeGreaterThan(0);
    const lastOrder = orders[orders.length - 1];

    expect(lastOrder.price).toBe("100.00000");
    expect(lastOrder.currency).toBe(testOrder.currency);
    expect(lastOrder.customerName).toBe(testOrder.customerName);
  });
});
