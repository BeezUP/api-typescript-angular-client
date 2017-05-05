import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('OptimisationsApi', api.OptimisationsApi)
.service('ReportsApi', api.ReportsApi)
.service('RulesApi', api.RulesApi)
.service('TrackingApi', api.TrackingApi)

export default apiModule;
