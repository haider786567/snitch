import { Router } from "express";
const router = Router();
import passport from "passport";
import { register,login ,googleCallback} from "../controllers/auth.controller.js";
import { validateRegisterUser,validateLoginUser } from "../validators/auth.validator.js";
import { config } from "dotenv";

router.post("/register", validateRegisterUser, register);
router.post("/login", validateLoginUser, login);
router.get("/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] }))

router.get("/google/callback",
    passport.authenticate("google", { session: false,failureRedirect: config.NODE_ENV === "development" ? "http://localhost:5173/login" : "https://yourdomain.com/login" }),
    googleCallback,
)

export default router;