import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'C hernyjj1412',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'C hernyjj1412',
          title: 'C hernyjj1412'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-c-hernyjj1412-должности-ло-l': IISCHernyjj1412ДолжностиЛоLForm,
    'i-i-s-c-hernyjj1412-сотрудники-l': IISCHernyjj1412СотрудникиLForm,
    'i-i-s-c-hernyjj1412-должности-ло-e': IISCHernyjj1412ДолжностиЛоEForm,
    'i-i-s-c-hernyjj1412-сотрудники-e': IISCHernyjj1412СотрудникиEForm
  },

});

export default translations;
