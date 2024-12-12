import { useState } from "react";
import axios from "axios";

const Create = () => {

    const [title, setTitle] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const workout = { title, sets, reps };
        console.log(workout);

        axios.post('http://localhost:4000/api/Workout', workout)
            .then((res) => {
                console.log(res.data)
                //Reload the page after successfully adding a workout
                window.location.reload();
            })
            .catch();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Workout Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Workout Sets: </label>
                    <input type="text"
                        className="form-control"
                        value={sets}
                        onChange={(e) => { setSets(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Workout Reps: </label>
                    <input type="text"
                        className="form-control"
                        value={reps}
                        onChange={(e) => { setReps(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Workout"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;