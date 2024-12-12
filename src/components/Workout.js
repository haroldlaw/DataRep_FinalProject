import WorkoutContent from "./WorkoutContent";

const Workout = (props) => {
    return props.myWorkout.map(
        (workout) => {
            return <WorkoutContent myworkout={workout} key={workout._id} Reload={props.ReloadData} />
        }
    );
}

export default Workout;