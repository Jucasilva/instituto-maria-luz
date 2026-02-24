import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Verification codes for email/phone authentication
 * Stores temporary codes sent to users for verification
 */
export const verificationCodes = mysqlTable("verification_codes", {
  id: int("id").autoincrement().primaryKey(),
  /** Email or phone number */
  contact: varchar("contact", { length: 320 }).notNull(),
  /** Verification code (6 digits) */
  code: varchar("code", { length: 6 }).notNull(),
  /** Type of contact: email or phone */
  type: mysqlEnum("type", ["email", "phone"]).notNull(),
  /** Whether the code has been used */
  used: int("used").default(0).notNull(),
  /** Expiration time */
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type VerificationCode = typeof verificationCodes.$inferSelect;
export type InsertVerificationCode = typeof verificationCodes.$inferInsert;

/**
 * User profiles with email and phone
 * Extended user information for contact methods
 */
export const userProfiles = mysqlTable("user_profiles", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserProfile = typeof userProfiles.$inferSelect;
export type InsertUserProfile = typeof userProfiles.$inferInsert;
/**
 * Public opinions/testimonials from visitors
 * Stores comments that appear publicly on the website
 */
export const opinions = mysqlTable("opinions", {
  id: int("id").autoincrement().primaryKey(),
  /** Name of the person leaving the opinion */
  name: varchar("name", { length: 255 }).notNull(),
  /** Email of the person (optional, for contact) */
  email: varchar("email", { length: 320 }),
  /** The opinion/comment text */
  comment: text("comment").notNull(),
  /** Whether the opinion is approved for public display */
  approved: int("approved").default(1).notNull(),
  /** Rating (1-5 stars) */
  rating: int("rating").default(5),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Opinion = typeof opinions.$inferSelect;
export type InsertOpinion = typeof opinions.$inferInsert;

/**
 * Public messages from visitors
 * Stores messages that appear publicly on the website
 */
export const messages = mysqlTable("messages", {
  id: int("id").autoincrement().primaryKey(),
  /** Name of the person leaving the message */
  name: varchar("name", { length: 255 }).notNull(),
  /** Email of the person (optional, for contact) */
  email: varchar("email", { length: 320 }),
  /** The message text */
  message: text("message").notNull(),
  /** Whether the message is approved for public display */
  approved: int("approved").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Message = typeof messages.$inferSelect;
export type InsertMessage = typeof messages.$inferInsert;
