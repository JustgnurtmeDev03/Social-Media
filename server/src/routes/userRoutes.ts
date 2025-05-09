import express from "express";
import { getProfile, updateUserProfile } from "~/controllers/userController";
import authMiddleware from "~/middlewares/auth";
import upload from "~/middlewares/uploadMiddleware";

const router = express.Router();

// Route lấy thông tin người dùng hiện tại
router.get("/profile", authMiddleware, getProfile);
router.put(
  "/update-profile",
  upload.single("avatar"),
  authMiddleware,
  updateUserProfile
);

export default router;
