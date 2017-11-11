import React, { Component } from 'react';
import { Session } from 'meteor/session';

import { Hours } from '../../static/hours';

class ReservationListItem extends Component{
    handleClick() {
        Session.set('selectedHour', this.props.hour);
    }
    renderRow () {

        if (!this.props.person){
            return (
            <div>
                <p>
                    {Hours[this.props.hour]} Add a reservation.
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleClick.bind(this)}>
                        Add/Change
                    </button>
                </p>
            </div> 
            );
        }

        return (
            <div>
                <p>
                    {Hours[this.props.hour]} {this.props.person.name} {this.props.person.phone}
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleClick.bind(this)}>
                        Add/Change
                    </button>
                </p>
         </div>
        );
    }
    render() {
        return (
            this.renderRow()
        );
    }
}

export default ReservationListItem;
