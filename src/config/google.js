const passport = require("passport");
const User = require("../user/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
/*
passport.use(
  new GoogleStrategy(
    {
      callbackURL: process.env.CALLBACK_URL,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
     console.log("user profile is: ", profile)
    }
  )
);*/
/*
const { OAuth2Client } = require('google-auth-library')
  const client = new OAuth2Client(process.env.CLIENT_ID)
  server.post("/config/google", async (req, res) => {
      const { token }  = req.body
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.CLIENT_ID
      });
      const { name, email, picture } = ticket.getPayload();    
      const user = await db.user.upsert({ 
          where: { email: email },
          update: { name, picture },
          create: { name, email, picture }
      })
      res.status(201)
      res.json(user)
  })*/