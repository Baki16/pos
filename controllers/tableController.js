const Table = require("../models/Table");

// 📌 Dohvati sve stolove
exports.getTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 Dodaj novi sto
exports.createTable = async (req, res) => {
  const { number, x, y } = req.body;
  try {
    const newTable = new Table({ number, x, y });
    await newTable.save();
    res.status(201).json(newTable);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
