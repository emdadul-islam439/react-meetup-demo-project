import Card from "../ui/Card";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Card key={meetup.id}>
          <MeetupItem
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        </Card>
      ))}
    </ul>
  );
}

export default MeetupList;
