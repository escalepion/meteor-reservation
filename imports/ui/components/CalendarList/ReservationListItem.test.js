import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import ReservaionListItem from './ReservationListItem';

if(Meteor.isClient) {

    describe('ReservaionListItem', function () {

        it('should render add a reservation text if no person', function() {

            const wrapper = mount(<ReservaionListItem />);
            expect(wrapper.find('.no-person').text()).toBe('Add a reservation.');
        });

        it('should render person if person exist', function() {
            const person = {name: 'akif', phone: '0554789'};
            const wrapper = mount(<ReservaionListItem person={person} />);

            expect(wrapper.find('.person-span').text()).toBe(' akif 0554789');
        });

        it('should render button', function() {
            const wrapper= mount(<ReservaionListItem />);
            expect(wrapper.find('button').text()).toBe('Add/Change');
        });

    });

}