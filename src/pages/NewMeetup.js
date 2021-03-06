import NewMeetupForm from '../components/meetups/NewMeetupForm';
import {useHistory} from 'react-router-dom';
function NewMeetupPage(){
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://meetups-b9b44-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'Post',
                body:JSON.stringify(meetupData),
                headers:{
                    'content-type':'application/json'
                }
            }).then(()=>{
                history.replace('/');
            });
    }
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup = {addMeetupHandler}/> 
        </section>
            

        
    );
}

export default NewMeetupPage;