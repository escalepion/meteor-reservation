import {
    Meteor
} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import moment from 'moment';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
    const format = 'DD-MM-YYYY';
    const currentTime = moment(moment().valueOf());
    const formattedDate = currentTime.format(format);
    Session.set('date', formattedDate);
    ReactDOM.render( routes , document.getElementById('app'));
});