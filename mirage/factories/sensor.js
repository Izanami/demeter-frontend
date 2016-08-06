import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {  return faker.commerce.product(); },
  last() {  return faker.random.number(); },
  minimum() {  return faker.random.number(); },
  maximum() {  return faker.random.number(); },
  unit() {  return faker.finance.currencyName(); },
});
