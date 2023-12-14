import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  фио: DS.attr('string'),
  должностиЛо: DS.belongsTo('должности', { inverse: null, async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.сотрудники1.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фио: {
    descriptionKey: 'models.сотрудники1.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должностиЛо: {
    descriptionKey: 'models.сотрудники1.validations.должностиЛо.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'сотрудники1', {
    id: attr('Id', { index: 0 }),
    фио: attr('Фио', { index: 1 }),
    должностиЛо: belongsTo('должности', 'Должности ло', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'сотрудники1', {
    id: attr('Id', { index: 0 }),
    фио: attr('ФИО', { index: 1 }),
    должностиЛо: belongsTo('должности', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
