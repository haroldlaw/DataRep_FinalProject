import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/Workouts/' + id)
            .then((response) => {
                setTitle(response.data.title);
                setSets(response.data.sets);
                setReps(response.data.reps);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newWorkout = { id, title, sets, reps };
        axios.put('http://localhost:4000/api/Workouts/' + id, newWorkout)
            .then((res) => {
                console.log(res.data);
                navigate('/Read');
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Workout Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Sets: </label>
                    <input type="text"
                        className="form-control"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Reps: </label>
                    <input type="text"
                        className="form-control"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Workout" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default Edit;