import {
  defineProjections,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/сотрудники1';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудникиMixin, {
});

defineProjections(Model);

export default Model;
