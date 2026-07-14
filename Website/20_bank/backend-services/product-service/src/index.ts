import "reflect-metadata";
import express from "express";
import type { Request, Response } from "express";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

const appDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL || "",
  synchronize: true,
  logging: false,
  entities: [Product],
});

const startServer = async () => {
  try {
    await appDataSource.initialize();
    console.log("Successfully connected to PostgreSQL using TypeORM and TS!");

    app.get("api/products/test", (req: Request, res: Response) => {
      res.json({ message: "Hello from Product Service!" });
    });

    app.listen(PORT, () => {
      console.log(`Product Service is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

startServer();
