import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


class ReservationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInsert: '',
      name: '',
      phone: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ error: '' });
    this.setState({ errorInsert:'' });
    !nextProps.selectedHour && this.setState({ error: 'There is no selected hour.'});
    nextProps.person !== undefined && this.setState({ name: nextProps.person.name, phone: nextProps.person.phone});
  }
  onNameChange(e) {
    this.setState({ name: e.target.value });
  }
  onPhoneChange(e) {
    this.setState({ phone: e.target.value });
  }
  onAddButtonClick() {
    Meteor.call('reservation.insert', this.props.date, this.props.selectedHour, this.state.name, this.state.phone, function(err, res) {
      if(!err) {
        this.setState({ errorInsert: 'Added succesfuly' });
      }else {
        this.setState({ errorInsert: err.reason });
      }
    }.bind(this));
  }
  onDeleteButtonClick() {
    Meteor.call('reservation.delete', this.props.date, this.props.selectedHour, function(err, res){
      if(!err){
        this.setState({ errorInsert: 'Deleted succesfully' });
      }else {
        this.setState({ errorInsert: err.reason });
      }
    }.bind(this));
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
            <div className="modal-header text-center">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h1 className="modal-title">{this.props.date}</h1>
              <h6 className="modal-title">{this.props.selectedHour}</h6>
            </div>
            <div className="modal-body">
              <label>Name: </label><input value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name" />
              <label>Phone: </label><input value={this.state.phone} onChange={this.onPhoneChange.bind(this)} placeholder="5051541212" />
              <p>{this.state.errorInsert}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={this.onAddButtonClick.bind(this)}>Add/Change</button>
              <button className={`btn btn-danger ${this.state.name === '' && this.state.phone === '' && 'disabled'}`} onClick={this.onDeleteButtonClick.bind(this)}>Delete</button>
              <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    );

  }
    render() {
        return (
          <div>
            {this.renderModalContent()}
          </div>
        );
    }
}

export default ReservationModal;
