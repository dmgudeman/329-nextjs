import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';


     // https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg




export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    'mongodb+srv://new_user02:' + encodeURIComponent("eZPoI2FwKaVhiRKz") + '@cluster0.7mfmump.mongodb.net/meetup?retryWrites=true&w=majority'
  );

  const db = client.db();
  const meetupCollection = db.collection('meetup');

  const meetups = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
       

      })),
      revalidate: 10
    },
  };
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
    
// }
