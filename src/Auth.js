import App from "./App";
import passport from 'passport';
import { Component } from "react";

require("./config/google");
  App.use(passport.initialize());
  App.use(passport.session());

  App.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  App.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/",
      successRedirect: "/profile",
      failureFlash: true,
      successFlash: "Successfully logged in!",
    })
  );