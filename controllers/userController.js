const User = require("../models/User");
const Table = require("../models/Table");

// 📌 Prijava konobara preko PIN-a
exports.loginWithPin = async (req, res) => {
  const { pin } = req.body;
  try {
    const user = await User.findOne();
    if (!user) return res.status(400).json({ message: "Pogrešan PIN" });

    const isMatch = await user.matchPin(pin);
    if (!isMatch) return res.status(400).json({ message: "Pogrešan PIN" });

    res.json({ message: "Prijavljen", userId: user._id, name: user.name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 Dohvati sve stolove koje konobar opslužuje
exports.getWaiterTables = async (req, res) => {
  const { userId } = req.params;
  try {
    const tables = await Table.find({ assignedTo: userId });
    res.json(tables);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
