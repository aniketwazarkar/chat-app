import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedinUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedinUserId },
    }).select("-password");
    // This will find all the users in the DB except you, if you want to send yourself the message then:
    //     const filteredUsers = await User.find();
    res.status(201).json(filteredUsers);

    if (!filteredUsers) {
      res.status(200).json({ message: "No users found" });
    }
  } catch (error) {
    console.log("Error in getUsersForSidebar Function", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
