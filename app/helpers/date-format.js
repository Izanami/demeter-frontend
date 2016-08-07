import Ember from 'ember';

export function dateFormat(params/*, hash*/) {
  let [date] = params;
  return moment(date).fromNow();
}

export default Ember.Helper.helper(dateFormat);
