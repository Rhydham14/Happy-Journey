const userService = require("../service/userService");


const UserController = {
  register: async (req, res) => {
    try {
      const { fname, lname, email, password, contact, dob, country, state } =
        req.body;

      // Call the register function from the userService
      const userData = await userService.register({
        fname,
        lname,
        email,
        password,
        contact,
        dob,
        country,
        state,
      });

      res
        .status(201)
        .json({ message: "User registered successfully", userData });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Call the login function from the userService
      const userData = await userService.login({ email, password });

      if (userData.success) {
        const { fname, user_id } = userData;
        const expiresIn = "15s";
        const token = jwt.sign({ email }, jwtSecretKey, { expiresIn });
        const refreshToken = jwt.sign({ email }, jwtSecretKey, {
          expiresIn: "30m",
        });

        res.status(200).json({
          success: true,
          message: userData.message,
          fname,
          token,
          refreshToken,
          user_id,
        });
      } else {
        const { message } = userData;
        res.status(401).json({ success: false, message });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  refreshToken: async (req, res) => {
    const refreshToken = req.headers["refresh-token"];

    console.log("inside refreshToken", refreshToken);
    try {
      const decoded = jwt.verify(refreshToken,jwtSecretKey);
      console.log();
      const newAccessToken = jwt.sign({ email: decoded.email }, jwtSecretKey, {
        expiresIn: "15s",
      });
      console.log("new token", newAccessToken);
      // Send the new access token in the response
      return res.status(200).json({
        message: "Access token refreshed successfully",
        token: newAccessToken,
      });
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Refresh token has expired" });
      } else if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid refresh token" });
      } else {
        console.error("Error refreshing access token:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  },
};

module.exports = UserController;
