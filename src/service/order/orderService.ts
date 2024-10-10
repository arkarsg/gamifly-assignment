import { db } from "~/db";
import { orders } from "~/db/schema";
import { ICreateOrder } from "./types";

export const createOrder = async (order: ICreateOrder) => {
  console.log(order)
  console.log(db.$client)
  try {
    const [newOrder] = await db
      .insert(orders)
      .values({
        price: order.price,
        currency: order.currency,
        customerName: order.customerName,
      })
      .returning();
      return newOrder
  } catch (error) {
    console.error("Error creating order: " + error);
    return {};
  }
}

export const getAllOrders = async () => {
  const allOrders = await db
    .select()
    .from(orders)
    .orderBy(orders.createdAt);
  return allOrders
}
