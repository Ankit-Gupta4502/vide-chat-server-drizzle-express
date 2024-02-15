
import { pgTable, varchar, timestamp, serial } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import Chats from "./Chats";
const users = pgTable("users", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 256 }),
	email: varchar("email", { length: 256 }).notNull().unique(),
	password: varchar("password", { length: 256 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
});

export const userRelations = relations(users, ({ many }) => {
	return { userChats: many(Chats) }
});
export default users