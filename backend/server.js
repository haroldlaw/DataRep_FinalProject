const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@admin.ugukg.mongodb.net/');

const workoutSchema = new mongoose.Schema({
    title: String,
    sets: Number,
    reps: Number,
});

const workoutModel = new mongoose.model('myWorkout', workoutSchema);

//Get all workouts
app.get('/api/Workout', async (req, res) => {
    const workout = await workoutModel.find({});
    res.status(200).json({ workout })
});

//Get single workout
app.get('/api/Workouts/:id', async (req, res) => {
    const workouts = await workoutModel.findById(req.params.id);
    res.json(workouts);
})

//Add a workout
app.post('/api/Workout', async (req, res) => {
    console.log(req.body.title);
    const { title, sets, reps } = req.body;

    const newWorkout = new workoutModel({ title, sets, reps });
    await newWorkout.save();

    res.status(201).json({ "message": "Workout Added!", Workout: newWorkout });
})

//Edit a workout
app.put('/api/Workouts/:id', async (req, res) => {
    const workouts = await workoutModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(workouts);
})

//Delete a workout
app.delete('/api/Workouts/:id', async (req, res) => {
    const workouts = await workoutModel.findByIdAndDelete(req.params.id);
    res.send(workouts);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});