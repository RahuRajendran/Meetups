import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props){
    return(
        <ul className = { classes.item}>
            {props.meetups.map((meetups)=>{
                return <MeetupItem key = {meetups.id}
                id = {meetups.id}
                image = {meetups.image}
                title = {meetups.title}
                address = {meetups.address}
                description = {meetups.description}
                />
            })}

        </ul>
    )
}

export default MeetupList;