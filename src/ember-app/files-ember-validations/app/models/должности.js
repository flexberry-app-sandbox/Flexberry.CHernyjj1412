import {
  defineProjections,
  Model as ДолжностиЛоMixin
} from '../mixins/regenerated/models/должности';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностиЛоMixin, {
});

defineProjections(Model);

export default Model;
