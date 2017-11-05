import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

class ReservationListItem extends Component{
    handleClick() {
        Session.set('selectedHour', this.props.hour);
    }
    render() {
        return (
            <div>
               <p>
                    {this.props.hour}:{this.props.person && this.props.person.name}:{this.props.person && this.props.person.phone}
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleClick.bind(this)}>
                        Add/Change
                    </button>
                </p>
            </div>
        );
    }
}

export default ReservationListItem;
