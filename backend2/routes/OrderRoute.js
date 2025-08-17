import express from "express"
import authMiddleware from "../middleware/Auth.js"
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/OrderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userOrders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);   // ✅ Changed from POST → GET
orderRouter.post("/status", updateStatus);

export default orderRouter;
