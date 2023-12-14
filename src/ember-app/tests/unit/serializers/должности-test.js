import { moduleForModel, test } from 'ember-qunit';

moduleForModel('должности', 'Unit | Serializer | должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:должности',
    'model:сотрудники1',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
