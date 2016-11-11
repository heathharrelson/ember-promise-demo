import { moduleFor, test } from 'ember-qunit';

moduleFor('route:async/inner1/inner2', 'Unit | Route | async/inner1/inner2', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
