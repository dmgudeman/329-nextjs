import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image=
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
        
        title='First Meetup'
        description='hahahahahha'
        address='1234 Street'
      />
    </Fragment>
  );
}
