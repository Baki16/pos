const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();
const app = express();

// Konekcija sa bazom
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rute
app.use("/api/users", require("./routes/users"));
app.use("/api/tables", require("./routes/tables"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
