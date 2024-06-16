import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndCookie } from "../utils/generateToken.js";
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const passwordMatch = await bcryptjs.compare(
      password,
      user?.password || ""
    );
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    generateTokenAndCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePicture,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = await User.create({
      fullName,
      username,
      password: await bcryptjs.hash(password, 10),
      gender,
      profilePicture:
        gender === "male" ? boyProfilePicture : girlProfilePicture,
    });
    if (newUser) {
      await newUser.save();
      generateTokenAndCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error during signup", error.message);
    res.status(500).json({ message: "Error signing up" });
  }
};
export const logout = async (req, res) => {
  try {
    res.cookie("jwtToken", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: "Error logging out" });
  }
};
