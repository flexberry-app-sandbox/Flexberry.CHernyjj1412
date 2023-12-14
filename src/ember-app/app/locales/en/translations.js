import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCHernyjj1412ДолжностиЛоLForm from './forms/i-i-s-c-hernyjj1412-должности-ло-l';
import IISCHernyjj1412СотрудникиLForm from './forms/i-i-s-c-hernyjj1412-сотрудники-l';
import IISCHernyjj1412ДолжностиЛоEForm from './forms/i-i-s-c-hernyjj1412-должности-ло-e';
import IISCHernyjj1412СотрудникиEForm from './forms/i-i-s-c-hernyjj1412-сотрудники-e';
import ДолжностиModel from './models/должности';
import Сотрудники1Model from './models/сотрудники1';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'должности': ДолжностиModel,
    'сотрудники1': Сотрудники1Model
  },

  'application-name': 'C hernyjj1412',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'C hernyjj1412',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'C hernyjj1412',
          title: 'C hernyjj1412'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'c-hernyjj1412': {
          caption: 'CHernyjj1412',
          title: 'CHernyjj1412',
          'i-i-s-c-hernyjj1412-должности-ло-l': {
            caption: 'Должности ло',
            title: ''
          },
          'i-i-s-c-hernyjj1412-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-c-hernyjj1412-должности-ло-l': IISCHernyjj1412ДолжностиЛоLForm,
    'i-i-s-c-hernyjj1412-сотрудники-l': IISCHernyjj1412СотрудникиLForm,
    'i-i-s-c-hernyjj1412-должности-ло-e': IISCHernyjj1412ДолжностиЛоEForm,
    'i-i-s-c-hernyjj1412-сотрудники-e': IISCHernyjj1412СотрудникиEForm
  },

});

export default translations;
