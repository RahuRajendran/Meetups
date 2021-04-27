import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react';

function AllMeetupsPage() {
    const [isloading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);
    useEffect(()=>{
        setIsLoading(true);
        fetch(
        'https://meetups-b9b44-default-rtdb.firebaseio.com/meetups.json'
        ).then((response)=>{
            return response.json();
        }).then((data)=>{
            const meetups = [];

            for(const key in data)
            {
                const meetup = {
                    id:key,
                    ...data[key]
            
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);

        });
    },[]);
        if(isloading)
        {
            return(
                <section>
                    <p>Loading..</p>
                </section>
            );
        }

    
    
    return (
        <div>All meetups
            <ul>

                <MeetupList meetups={loadedMeetups} />

            </ul>
        </div>
    );
}

export default AllMeetupsPage;