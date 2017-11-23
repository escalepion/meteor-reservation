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
            <div className="person">
                <div className="person__hour"><span>{Hours[this.props.hour]}</span></div>
                <div className="person__info text-left"><span className="no-person">Add a reservation.</span></div>
                <div className="person__button">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleClick.bind(this)}>
                    Add/Change
                    </button>
                </div>
                    
            </div> 
            );
        }

        return (
            <div className="person">
                    <div className="person__hour"><span>{Hours[this.props.hour]}</span></div>
                    <div className="person__info"><span className="person-span"> {this.props.person.name} ({this.props.person.phone})</span></div>
                    <div className="person__button">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleClick.bind(this)}>
                        Add/Change
                    </button>
                    </div>
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
