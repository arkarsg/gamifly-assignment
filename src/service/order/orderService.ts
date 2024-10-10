import { db } from "~/db";
import { orders } from "~/db/schema";
import { Order } from "~/utils/types";
import { ICreateOrder } from "./types";

export const createOrder = async (order: ICreateOrder): Promise<Order | null> => {
  const { price, currency, customerName } = order;

  try {
    const [newOrder] = await db
      .insert(orders)
      .values({ price, currency, customerName })
      .returning();

    return newOrder;
  } catch (error) {
    const { message } = error as Error;
    console.error("Error creating order: ", message);
    return null;
  }
};

export const getAllOrders = async () => {
  const allOrders = await db
    .select()
    .from(orders)
    .orderBy(orders.createdAt);
  return allOrders
}
