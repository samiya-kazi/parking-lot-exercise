const { model, Schema } = require('mongoose');

const parkingLogSchema = new Schema({
  license: {
    type: String,
    required: true
  },
  slot: {
    type: String,
    enum: [
      'slot-1',
      'slot-2',
      'slot-3',
      'slot-4',
      'slot-5',
      'slot-6',
      'slot-7',
      'slot-8',
      'slot-9',
      'slot-10',
    ],
    required: true
  },
  checkInTimestamp: {
    type: Date,
    required: true
  },
  checkOutTimestamp: {
    type: Date,
    validate: {
      validator: function(value) {
        return value > this.checkInTime;
      },
      message: props => `checkOutTime (${props.value}) must be greater than checkInTime`
    },
    required: function () {
      return this.status === 'checked-out'
    }
  },
  status: {
    type: String,
    enum: ['occupied', 'checked-out'],
    required: true
  },
  fee: {
    type: Number,
    required: function () {
      return this.status === 'checked-out'
    }
  }
});

const ParkingLog = model('parking-log', parkingLogSchema);

module.exports = ParkingLog;