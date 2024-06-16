import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUsersId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUsersId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
