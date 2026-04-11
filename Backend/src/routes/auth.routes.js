import { Router } from "express";
const router = Router();
import passport from "passport";
import { register,login ,googleCallback} from "../controllers/auth.controller.js";
import { validateRegisterUser,validateLoginUser } from "../validators/auth.validator.js";

router.post("/register", validateRegisterUser, register);
router.post("/login", validateLoginUser, login);
router.get("/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] }))

router.get("/google/callback",
    passport.authenticate("google", { session: false }),
    googleCallback,
)

export default router;