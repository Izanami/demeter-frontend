import { test } from 'qunit';
import moduleForAcceptance from 'demeter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
