import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class ReservationListItem extends Component{
    handleClick() {
        Meteor.call('reservation.insert', this.props.date, this.props.hour);
    }
    render() {
        return (
            <div>
               <p>
                    {this.props.hour}:{this.props.person}
                    <button onClick={this.handleClick.bind(this)}>
                        Click Me
                    </button>
                </p>
            </div>
        );
    }
}

export default ReservationListItem;
