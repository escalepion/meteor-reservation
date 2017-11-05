import React, { Component } from 'react';


class ReservationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {error: ''};
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ error: '' });
    typeof(nextProps.selectedHour) !== 'number' && this.setState({ error: 'There is no selected hour.'});
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
              <h4 className="modal-title">Modal Header</h4>
              <h4 className="modal-title">{this.props.selectedHour}</h4>
            </div>
            <div className="modal-body">
              <input value={this.props.person && this.props.person.name} placeholder="Name" />
              <input value={this.props.person && this.props.person.phone} placeholder="5051541212" />
            </div>
            <div className="modal-footer">
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
