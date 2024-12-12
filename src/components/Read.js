import Workout from "./Workout";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

    const [workout, setWorkout] = useState([]);

    const ReloadData = () => {
        axios.get('http://localhost:4000/api/Workout')
            .then((response) => {
                console.log(response.data);
                setWorkout(response.data.workout);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        ReloadData();

    }, []);

    return (
        <div>
            <Workout myWorkout={workout} ReloadData={ReloadData} />
        </div>
    );
}

export default Read;