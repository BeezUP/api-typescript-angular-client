import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AccountApi', api.AccountApi)
.service('AlertsApi', api.AlertsApi)
.service('ContractsApi', api.ContractsApi)
.service('FriendsApi', api.FriendsApi)
.service('InvoicesApi', api.InvoicesApi)
.service('RightsApi', api.RightsApi)
.service('SecurityApi', api.SecurityApi)
.service('SharesApi', api.SharesApi)
.service('StoresApi', api.StoresApi)

export default apiModule;
