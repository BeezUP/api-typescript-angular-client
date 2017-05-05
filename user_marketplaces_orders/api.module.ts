import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AutoTransitionsApi', api.AutoTransitionsApi)
.service('BatchesApi', api.BatchesApi)
.service('ExportsApi', api.ExportsApi)
.service('GlobalApi', api.GlobalApi)
.service('ListApi', api.ListApi)
.service('OrderApi', api.OrderApi)

export default apiModule;
