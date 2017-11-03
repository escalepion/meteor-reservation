import React from 'react';
import { Session } from 'meteor/session';
 
import moment from 'moment';
import 'moment/locale/tr';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';

const onCalendarChange = (value) => {
    const format = 'DD-MM-YYYY';
    if(value) {
        Session.set('date', value.format(format));
    }
}
const CalendarComponent = () => {
    return (
        <div>
            <Calendar onChange={onCalendarChange}/>
        </div>
    );
};

export default CalendarComponent;
