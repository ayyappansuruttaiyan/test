import express from "express";
import bookController from "../controllers/book.controller.js";
const router = express.Router();

router.post("/create", bookController.createBook);
router.get("/allbooks", bookController.getAllBooks);
router.get("/book/:id", bookController.getBookById);

export default router;
