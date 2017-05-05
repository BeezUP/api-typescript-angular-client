import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AutoApi', api.AutoApi)
.service('CatalogApi', api.CatalogApi)
.service('GlobalApi', api.GlobalApi)
.service('ImportationCatalogInfoApi', api.ImportationCatalogInfoApi)
.service('ImportationProcessApi', api.ImportationProcessApi)

export default apiModule;
