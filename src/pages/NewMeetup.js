import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    console.log("onAddMeetupHandler");
    console.log(meetupData);
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
