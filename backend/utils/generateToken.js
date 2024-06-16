import jwt from "jsonwebtoken";

export const generateTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  res.cookie("jwtToken", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true, //prevent  XSS attack
    sameSite: "strict", //prevent CORS attack CSRF attacks also
    secure: process.env.NODE_ENV !== "development",
  });
};
