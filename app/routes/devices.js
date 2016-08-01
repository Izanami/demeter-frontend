import Ember from 'ember';

let devices = [
    {
    id: 1,
    name: 'Température',
    lastUpdate: Date.now()
    },
    {
    id: 2,
    name: 'Humidité',
    lastUpdate: Date.now()
    }];

export default Ember.Route.extend({
    model() {
        return devices;
    }
});
