const { Router } = require("express");
const workoutController = require("../module/controller/workoutControlleries");
const workoutRoute = Router();
workoutRoute.post("/create-workout", workoutController.createWorkout);
workoutRoute.get("/get-workouts", workoutController.getAllWorkout);
workoutRoute.get("/get-workout/:id", workoutController.getWorkout);
workoutRoute.put("/update-workout/:id", workoutController.updateWorkout);
workoutRoute.delete("/delete-workout/:id", workoutController.deleteWorkout)

module.exports = workoutRoute;
