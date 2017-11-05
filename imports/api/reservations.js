import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Reservations = new Mongo.Collection('reservations'); 
if (Meteor.isServer) {
    Meteor.publish('reservations', function () {
        return Reservations.find();
    });
}

Meteor.methods({
    'reservation.insert'(date, hour, name, phone) {
        new SimpleSchema({
            date: {
                type: String,
                label: 'Date',
                min: 1
            },
            hour: {
                type: Number,
                label: 'Hour',
                min: 0,
                max: 24
            }
        }).validate({date, hour});
       const findReservation = Reservations.findOne({ date });
        if(findReservation) {
           Reservations.update({
               date
           }, {
               $set: {
                   [hour]: { name, phone}
               }
           });
        }else {
            return Reservations.insert({
                date,
                [hour]: {name, phone}
            });
        };
        
    }
});