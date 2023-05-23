import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    console.log("onAddMeetupHandler");
    console.log(meetupData);
    // db-link: https://react-getting-started-34414-default-rtdb.firebaseio.com/
    fetch(
      'https://react-getting-started-34414-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
