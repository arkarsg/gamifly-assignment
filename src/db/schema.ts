import { numeric, pgEnum, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const currencyEnum = pgEnum("currency", ["USD", "EUR", "THB", "HKD", "SGD", "AUD"]);
export const statusEnum = pgEnum("status", ["PENDING", "COMPLETED", "FAILED"])
export const paymentGatewayEnum = pgEnum("paymentGateway", ["BRAINTREE", "PAYPAL"])

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  price: numeric({precision: 100, scale: 5}).notNull(),
  currency: currencyEnum("currency").notNull(),
  customerName: varchar("customer_name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  orderId: serial("order_id").references(() => orders.id, {
    onDelete: "cascade",
    onUpdate: "cascade"
  }).notNull(),
  paymentGateway: paymentGatewayEnum("payment_gateway").notNull(),
  status: statusEnum("status").default("PENDING").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})