import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    value() { return faker.random.number(); }
});
