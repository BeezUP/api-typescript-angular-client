import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('GroupsApi', api.GroupsApi)
.service('LOVApi', api.LOVApi)

export default apiModule;
