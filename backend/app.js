const express = require("express");
require("../backend/connection/database.js");
const PORT = 4000;
const userRoutes = require("../backend/routes/userRoutes.js");


const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:3000/"] }));
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server connected:", PORT);
});
