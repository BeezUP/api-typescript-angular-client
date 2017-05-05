import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('ChannelsGlobalApi', api.ChannelsGlobalApi)

export default apiModule;
