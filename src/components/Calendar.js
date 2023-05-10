import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

/*const getWorkouts = () => {
    fetch(API_URL_WO)
        .then(response => response.json())
        .then(data => setWorkouts(data.content))
        .catch(err => console.error(err))
}*/
const events = [
    //{ fetch(getWorkouts()) },
    {
        id: 1,
        title: 'event 1',
        start: '2023-04-24T10:00:00',
        end: '2023-04-24T12:00:00',
    },
    {
        id: 2,
        title: 'event 2',
        start: '2021-06-16T13:00:00',
        end: '2021-06-16T18:00:00',
    },
    { id: 3, title: 'event 3', start: '2021-06-17', end: '2021-06-20' },
];
export default function FullCalendarApp() {
    return (
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    center: 'dayGridMonth,timeGridWeek,timeGridDay new',
                }}
                events={events}
                eventColor="red"
                nowIndicator
                dateClick={(e) => console.log(e.dateStr)}
                eventClick={(e) => console.log(e.event.id)}
            />
        </div>
    );
}