import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Customerlist from './Customerlist';
import Workoutlist from './Workoutlist';
import BigCalendar from './BigCalendar';

function TabApp() {
    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
        setValue(value);
    };


    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="Customers" />
                <Tab value="two" label="Workouts" />
                <Tab value="four" label="Big Calendar" />
            </Tabs>
            {value === 'one' && <div> <Customerlist /></div>}
            {value === 'two' && <div><Workoutlist /> </div>}
            {value === 'four' && <div><BigCalendar /> </div>}
        </div>
    );
}
export default TabApp;
