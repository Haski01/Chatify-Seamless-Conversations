import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

//  signup route
export const signup = async (req, res) => {
  try {
    // fetch userData from req.body
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // all field are required
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      res.status(400).json({ error: "All fields are required" });
    }

    //  check password length
    if (password.length < 6) {
      res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    // password must be same as confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    // check user already existed in database
    const user = await User.findOne({ username: username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // avtar generator api : https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //  create new user to db
    const newUser = new User({
      fullName: fullName,
      username: username,
      password: hashedPassword,
      gender: gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // GANERATE JWT TOKEN HERE

      // save user to db
      await newUser.save();

      // send user info to frontend
      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  res.send("login");
};
export const logout = (req, res) => {
  res.send("logout");
};
