import { DataSource } from "typeorm";
import dotenv from "dotenv"

dotenv.config()

import { User } from "../entity/User";
import { Product } from "../entity/Product";
import { Order } from "../entity/Order";
import { ProductTable1702520087702 } from "../migration/1702520087702-ProductTable";
import { UserTable1702520031076 } from "../migration/1702520031076-UserTable";
import { OrderTable1702520627333 } from "../migration/1702520627333-OrderTable";

export const AppDataSource: DataSource = new DataSource({
    type: `postgres`,
    url: process.env.PG_URI_DEV,
    logger: "advanced-console",
    entities: [Product, Order, User],
    migrations: [ProductTable1702520087702, UserTable1702520031076, OrderTable1702520627333],
    cache: true
})

export async function connect() {
    return await AppDataSource.initialize()
}