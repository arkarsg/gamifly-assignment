import { db } from "~/db";
import { payments } from "~/db/schema";
import { Payment } from "~/utils/types";
import { ICreatePayment } from "./types";

export const createPayment = async (payment: ICreatePayment): Promise<Payment | null> => {
  const { orderId, paymentGateway } = payment;

  try {
    const [newPayment] = await db
      .insert(payments)
      .values({ orderId, paymentGateway })
      .returning();

    return newPayment;
  } catch (error) {
    const { message } = error as Error;
    console.error("Error creating payment: ", message);
    return null;
  }
};
