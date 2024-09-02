const Work = require("../../model/workoutModel")

const createWorkout = async (req, res) => {
    const { title, reps, comment } = req.body;
    try {
        const createWorkout = await Work.create({ title, reps, comment });
        res.status(200).json({ message: "Workout created successfully", data: { createWorkout } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllWorkout = async (req, res) => {
    try {
        const getAllWorkout = await Work.find();
        res.status(200).json({ message: "Workouts got successfully", data: { getAllWorkout } })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const getWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const getWorkout = await Work.findById(id);
        res.status(200).json({ message: "Workout got successfully", data: { getWorkout } })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const updateWorkout = await Work.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Workout updated successfully", data: { updateWorkout } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteWorkout = await Work.findByIdAndDelete(id);
        res.status(200).json({ message: "Workout deleted successfully", data: { deleteWorkout } })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createWorkout,
    getAllWorkout,
    getWorkout,
    updateWorkout,
    deleteWorkout
}