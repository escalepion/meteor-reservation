import React, { Component } from 'react';


class ReservationModal extends Component {
    render() {
      console.log(this.props.selectedHour);
        return (
        <div>
        <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Click Me
    </button>
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
          
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Modal Header</h4>
                  <h4 className="modal-title">asd{this.props.selectedHour}</h4>
                </div>
                <div className="modal-body">
                  <p>asdasd</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
          
            </div>
          </div>
        </div>
        );
    }
}

export default ReservationModal;
