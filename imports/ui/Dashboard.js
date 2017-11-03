import React, {Component} from 'react';


import PrivateHeader from './PrivateHeader';
import CalendarList from './pages/CalendarList';

// const onChange = (value) => {
//     const format = 'DD-MM-YYYY';
//     const currentTime = moment(moment().valueOf());
//     if (value.format(format) === currentTime.format(format)) {console.log('tarih: ', currentTime.format(format));}
//   }

class Dashboard extends Component {

    // formatDate(time) {
    //     const format = 'DD-MM-YYYY';
    //     const formattedDate = time.format(format);
    //     return formattedDate;
    // }
    // onChange (value) {
    //     const format = 'DD-MM-YYYY';
    //     const currentTime = moment(moment().valueOf());
    //     const formattedDate = this.formatDate(currentTime);
    //     if (formattedDate === currentTime.format(format)) {
    //         console.log('tarih: ', currentTime.format(format));
    //     }
    // }
    render () {

        return (
            <div>
            <PrivateHeader title='Dashboard' />
            <div className="page-content">
                <CalendarList />
            </div>
        </div>
        );
    }
}

export default Dashboard;

// export default () => {
//     moment.locale('tr');
//     const currentTime = moment(moment().valueOf());
//     console.log(currentTime.format('DD-MM-YYYY'));
//     return (
//         <div>
//             <PrivateHeader title='Dashboard' />
//             <div className="page-content">
//                 <Calendar onChange={onChange} />
//             </div>
//             <button>
//                 Click Me
//             </button>
//         </div>
//     );
// };
