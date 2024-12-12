import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const WorkoutContent = (props) => {
    useEffect(() => {
        console.log("Workout Content:", props.myworkout);
    }, [props.myworkout]);

    const handleDelete = (e) => {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/Workouts/' + props.myworkout._id)
            .then((res) => {
                props.Reload();
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <Card>
                <Card.Header>{props.myworkout.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <footer>{props.myworkout.sets}</footer>
                        <footer>{props.myworkout.reps}</footer>
                    </blockquote>
                </Card.Body>
                <Link className="btn btn-primary" to={"/Edit/" + props.myworkout._id}>Edit</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

export default WorkoutContent;