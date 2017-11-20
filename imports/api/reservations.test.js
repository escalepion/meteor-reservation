import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { Reservations } from './reservations';

if (Meteor.isServer) {
    describe('reservations', function () {

        const reservationOne = {
            _id: 'reservationOneId1',
            date: '19-11-2017',
            0: {name: 'akif', phone: '055421154'}
        };

    beforeEach(function () {
            Reservations.remove({});
            Reservations.insert(reservationOne);
    });

    it('should delete reservation', function() {
        const date = '19-11-2017';
        const hour = 0;
        Meteor.server.method_handlers['reservation.delete'].apply({}, [date, hour]);
        const fetched = Reservations.findOne({ date });
        expect(fetched[0]).toBe(null);
    });

    it('should insert reservation', function() {
        const date= '20-11-2017';
        const hour= 0;
        const name =  'akif';
        const phone = '054741';

        Meteor.server.method_handlers['reservation.insert'].apply({}, [date, hour, name, phone]);
        expect(Reservations.findOne({ date })).toExist();
    });

    });
}
