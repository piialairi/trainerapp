import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { API_URL_WO, API_URL_WOCUST } from "../Constant";
import dayjs from 'dayjs';

export default function WorkoutCalendar() {
    const localizer = momentLocalizer(moment)
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        getWorkouts()
    });

    const getWorkouts = () => {
        fetch(API_URL_WOCUST)
            .then(response => response.json())
            .then(data => setWorkouts(data))
            .catch(err => console.error(err))
    }

    const events = workouts.map((workout) => {
        return {
            id: workout.id,
            title: workout.activity,
            start: new Date(workout.date),
            end: new Date(dayjs(workout.date).add(workout.duration, 'minutes')),
            allDay: false
        }
    })
    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            views={['month', 'day', 'week']}
            style={{ height: 450 }}
        />)
}
