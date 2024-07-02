import React from 'react';
import EventSchedule from './components/EventSchedule'; // Ensure this path is correct

const events = [
  { title: "Tech Conference 2024", date: "2024-07-15", location: "San Francisco, CA", description: "Join industry leaders and innovators for a full day of keynote speeches, breakout sessions, and networking opportunities focused on the latest advancements in technology." },

  { title: "Summer Music Festival", date: "2023-06-20", location: "Austin, TX", description: "Enjoy live performances from top artists across multiple genres, food trucks, and fun activities at this annual outdoor music festival." },

  { title: "Art Exhibition", date: "2024-08-05", location: "New York, NY", description: "Explore contemporary artworks by emerging and established artists at this month-long exhibition held at the downtown art gallery." },

  { title: "Annual Science Fair", date: "2022-11-15", location: "Boston, MA", description: "Witness the incredible projects of young scientists at our annual science fair, showcasing innovative experiments and research from local schools." }
];

function App() {
  return (
    <div className="App">
      <h1>Event Schedule</h1>
      <EventSchedule events={events} />
    </div>
  );
}

export default App;