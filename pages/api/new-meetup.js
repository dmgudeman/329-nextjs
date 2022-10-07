
import { MongoClient } from 'mongodb';
// /api/new-meetup
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const date = data;
    const client = await MongoClient.connect(
      'mongodb+srv://new_user02:' + encodeURIComponent("eZPoI2FwKaVhiRKz") + '@cluster0.7mfmump.mongodb.net/meetup?retryWrites=true&w=majority'
    );

    const db = client.db();
    const meetupCollection = db.collection('meetup');
    const result = await meetupCollection.insertOne(data);


    client.close();
    res.status(201).json({ message: 'meetup inserted' });
  }
}
