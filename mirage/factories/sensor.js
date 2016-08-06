import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {  return faker.commerce.product(); },
  unit() {  return faker.finance.currencyName(); },
});
