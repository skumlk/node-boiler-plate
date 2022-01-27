
import * as express from "express";
import authRoutes from "../routes/AuthRoutes";
import productRoutes from "../routes/ProductRoutes";

export default async ({ expressApp } = { expressApp: express.application }) => {
    expressApp.use("/api/auth", authRoutes)
    expressApp.use("/api/products", productRoutes)
}