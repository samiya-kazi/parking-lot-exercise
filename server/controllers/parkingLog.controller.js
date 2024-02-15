const { findAllLogs, findAllCurrentlyOccupiedLogs, checkIfSlotOccupied, createParkingLog, markParkingLogAsCheckedOut } = require("../models/parkingLog/parkingLog.query");

async function getAllLogs (req, res) {
  try {
    const logs = await findAllLogs();
    res.send(logs);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
}

async function getAllOccupiedLogs (req, res) {
  try {
    const logs = await findAllCurrentlyOccupiedLogs();
    res.send(logs);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
}

async function postNewLog (req, res) {
  try {
    const { license, slot } = req.body;

    if (!license || !slot || typeof license !== 'string' || typeof slot !== 'string')
      return res.status(400).send({ error: 'Invalid data.' });

    const check = await checkIfSlotOccupied(slot);
    if (check) return res.status(400).send({ error: 'Slot is already occupied.' });

    const data = {
      license,
      slot,
      checkInTimestamp: new Date(),
      status: 'occupied'
    }

    const log = await createParkingLog(data);
    res.status(201).send(log);

  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
}


async function checkOutLog (req, res) {
  try {
    const { id } = req.params;
    const { fee } = req.body;

    const updatedLog = await markParkingLogAsCheckedOut(id, fee);

    res.send(updatedLog);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
}


module.exports = {
  getAllLogs,
  getAllOccupiedLogs,
  postNewLog,
  checkOutLog
}