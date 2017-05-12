import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('BeezUPApi', api.BeezUPApi)
.service('GroupsApi', api.GroupsApi)
.service('LOVApi', api.LOVApi)
.service('PublicChannelsApi', api.PublicChannelsApi)
.service('SecurityApi', api.SecurityApi)

export default apiModule;
