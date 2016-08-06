import Ember from 'ember';

export default Ember.Controller.extend({
    displayGraph: true,

    actions: {
        showTable() {
            this.set('displayGraph', false);
            this.set('displayTable', true);
        },

        showGraph() {
            this.set('displayGraph', true);
            this.set('displayTable', false);
        }
    }
});
