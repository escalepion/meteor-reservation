import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


class ReservationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      name: '',
      phone: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ error: '' });
    typeof(nextProps.selectedHour) !== 'number' && this.setState({ error: 'There is no selected hour.'});
    !!this.props.person && this.setState({ name: this.props.person.name, phone: this.props.person.phone});
  }
  onNameChange(e) {
    this.setState({ name: e.target.value });
  }
  onPhoneChange(e) {
    this.setState({ phone: e.target.value });
  }
  onAddButtonClick() {
    Meteor.call('reservation.insert', this.props.date, this.props.selectedHour, this.state.name, this.state.phone);
  }
  renderModalContent() {
    if(this.state.error !== ''){
      return (
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Sorry there is an error: {this.state.error}</h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      );
    }
    return (
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">{this.props.date}</h4>
              <h4 className="modal-title">{this.props.selectedHour}</h4>
            </div>
            <div className="modal-body">
              <input value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name" />
              <input value={this.state.phone} onChange={this.onPhoneChange.bind(this)} placeholder="5051541212" />
            </div>
            <div className="modal-footer">
              <button onClick={this.onAddButtonClick.bind(this)}>Add/Change</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    );

  }
    render() {
        return (
          <div>
            <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
              Click Me
            </button>
            {this.renderModalContent()}
          </div>
        );
    }
}

export default ReservationModal;
