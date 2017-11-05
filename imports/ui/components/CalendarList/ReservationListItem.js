import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

class ReservationListItem extends Component{
    handleClick() {
        Meteor.call('reservation.insert', this.props.date, this.props.hour);
        Session.set('selectedHour', this.props.hour);
    }
    render() {
        return (
            <div>
               <p>
                    {this.props.hour}:{this.props.person && this.props.person.name}
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleClick.bind(this)}>
                        Click Me
                    </button>
                </p>
            </div>
        );
    }
}

export default ReservationListItem;
