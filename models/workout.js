var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: new Date().setDate(new Date().getDate()),
    },

    exercises: Array,
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);
WorkoutSchema.virtual("totalDuration").get(function () {
  var totalDuration = 0;
  for (let i = 0; i < this.exercises.length; i++) {
    totalDuration = totalDuration + this.exercises[i].duration;
  }
  return totalDuration;
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
