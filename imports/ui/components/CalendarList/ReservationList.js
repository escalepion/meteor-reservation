import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import { Reservations } from '../../../api/reservations';

import ReservationListItem from './ReservationListItem';

const arrayHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

class ReservationList extends Component {
    
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
        return (
            <div>
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
