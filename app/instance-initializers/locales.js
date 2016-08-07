export function initialize(/* appInstance */) {
  // appInstance.inject('route', 'foo', 'service:foo');
    let locale = window.navigator.userLanguage || window.navigator.language;
    console.log(moment.locale(locale));
}

export default {
  name: 'locales',
  initialize
};
