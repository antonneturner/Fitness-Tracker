var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate()),
  },

  exercises: Array,
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
