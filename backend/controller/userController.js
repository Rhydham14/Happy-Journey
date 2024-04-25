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
      console.log("registratyion", userData);
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
console.log("login",userData.email, userData.password);
      if (userData.success) {
        console.log("success",userData.success);
        const { fname, user_id } = userData;

        res.status(200).json({
          success: true,
          message: userData.message,
          fname,
          user_id,
        });
      } else {
        const { message } = userData;
        console.log("fail",message);
        res.status(401).json({ success: false, message });
      }
    } catch (error) {
      console.log("Error logging in:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

};

module.exports = UserController;
