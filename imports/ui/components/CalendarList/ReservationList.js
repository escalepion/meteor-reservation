import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { createContainer } from 'meteor/react-meteor-data';

import { Reservations } from '../../../api/reservations';

import ReservationListItem from './ReservationListItem';
import ReservationModal from './ReservationModal';

const arrayHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

class ReservationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHour: null
        };
    }
    componentDidMount() {
        this.tracker = Tracker.autorun(() => {
            const selectedHour = Session.get('selectedHour');
            this.setState({ selectedHour });
        });
    }
    listDays() {
        return arrayHours.map((index) => {
            let person;
            if(this.props.fetchDayReservations) {
                if (this.props.fetchDayReservations[index]) {
                    person = this.props.fetchDayReservations[index];
                }else {
                    person = null;
                }
            } else {
                person=null;
            }
            return <ReservationListItem key={index} hour={index} date={this.props.date} person={person}/>
        });
    }
    render () {
        let person = { name: '', phone: '' };
        if(this.props.fetchDayReservations && Session.get('selectedHour') !== undefined) {
            console.log('triggered');
            if (this.props.fetchDayReservations[Session.get('selectedHour')]) {
                person = this.props.fetchDayReservations[Session.get('selectedHour')];
            }
        }

        return (
            <div>
                <ReservationModal date={this.props.date} person={person} selectedHour={this.state.selectedHour}/>
                <h1>{this.props.date}</h1>
                {this.listDays()}
                
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('reservations');
return {
    fetchDayReservations: Reservations.findOne({ date: Session.get('date') })
};
}, ReservationList);
