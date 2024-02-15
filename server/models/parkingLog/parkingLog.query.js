const ParkingLog = require("./parkingLog.model");

async function findAllLogs () {
  try {
    const logs = await ParkingLog.find({});
    return logs;
  } catch (error) {
    console.log(error);
    throw new Error('Error while getting all logs.');
  }
}

async function findAllCurrentlyOccupiedLogs () {
  try {
    const logs = await ParkingLog.find({ status: "occupied" });
    return logs;
  } catch (error) {
    console.log(error);
    throw new Error('Error while getting all occupied logs.');
  }
}

async function createParkingLog (data) {
  try {
    const newLog = await ParkingLog.create(data);
    return newLog;
  } catch (error) {
    console.log(error);
    throw new Error('Error while creating new log.');
  }
}


async function markParkingLogAsCheckedOut (id, fee) {
  try {
    const data = {
      checkOutTimestamp: new Date(),
      status: 'checked-out',
      fee
    }
    const updatedLog = await ParkingLog.findByIdAndUpdate(id, { $set: data }, { new: true });
    return updatedLog;
  } catch (error) {
    console.log(error);
    throw new Error('Error while updating log as checked out.');
  }
}


async function checkIfSlotOccupied (slot) {
  try {
    const check = await ParkingLog.findOne({ slot, status: "occupied" });
    return check;
  } catch (error) {
    console.log(error);
    throw new Error('Error checking if slot is occupied.');
  }
}


module.exports = {
  findAllLogs,
  findAllCurrentlyOccupiedLogs,
  createParkingLog,
  markParkingLogAsCheckedOut,
  checkIfSlotOccupied
}