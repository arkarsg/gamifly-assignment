import { eq } from "drizzle-orm";
import { db } from "~/db";
import { payments } from "~/db/schema";
import { Payment, StatusType } from "~/utils/types";
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

export const updatePaymentStatusByOrderId = async (orderId: number, newStatus: StatusType): Promise<Payment | null> => {
  try {
    const [updatedPayment] = await db
      .update(payments)
      .set({ status: newStatus})
      .where(eq(payments.orderId, orderId))
      .returning();
    return updatedPayment;
  } catch (error) {
    const { message } = error as Error
    console.error("Error updating payment: ", message);
    return null;
  }
}
