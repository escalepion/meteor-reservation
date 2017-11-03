import React, { Component } from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import moment from 'moment';

import CalendarComponent from '../components/CalendarList/Calendar';
import ReservationList from '../components/CalendarList/ReservationList';


class CalendarList extends Component {
    constructor(props) {
        super(props);
        const format = 'DD-MM-YYYY';
        const currentTime = moment(moment().valueOf());
        const formattedDate = currentTime.format(format);
        this.state = {date: formattedDate};
    }
    componentDidMount () {
        this.tracker = Tracker.autorun(() => {
            const date = Session.get('date');
            this.setState({ date });
        });
    }

    componentWillUnmount () {
        this.tracker.stop();
    }
    render() {
        return (
            <div>
                <CalendarComponent />
                <ReservationList date={this.state.date}/>
            </div>
        );
    }
}

export default CalendarList;
