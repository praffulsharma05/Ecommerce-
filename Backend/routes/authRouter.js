import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: `${process.env.CLIENT_URL}`,
        failureRedirect: "/auth/failure"
    })
);

router.get("/failure", (req, res) => {
    res.send("Something went wrong!");
});

router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect(process.env.CLIENT_URL);
    });
});

router.get("/user", (req, res) => {
    res.send(req.user);
});

export default router;
