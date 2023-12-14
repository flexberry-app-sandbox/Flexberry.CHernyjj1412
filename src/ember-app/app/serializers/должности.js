import { Serializer as ДолжностиЛоSerializer } from
  '../mixins/regenerated/serializers/должности';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДолжностиЛоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
