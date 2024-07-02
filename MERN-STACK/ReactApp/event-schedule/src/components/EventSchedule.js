import React from 'react';
import './EventSchedule.css';

const EventSchedule = ({ events }) => {
    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
    const today = new Date();

    return (
        <div className="event-schedule">
            {sortedEvents.map((event, index) => {
                const eventDate = new Date(event.date);
                const isPastEvent = eventDate < today;

                return (
                    <div key={index} className={`event ${isPastEvent ? 'past-event' : 'upcoming-event'}`}>
                        <h2>{event.title}</h2>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                        <p>Description: {event.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default EventSchedule;