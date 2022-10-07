import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';


export default function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        description="hahahahahha"
        address="1234 Street"
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {params: {
                meetupId: 'm1'
            }},
            {params: {
                meetupId: 'm2'
            }}
        ]
    }
    
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId, 'llllllllllll');
  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,

        title: 'First Meetup',
        description: 'hahahahahha',
        address: '1234 Street',
      },
    },
  };
}



