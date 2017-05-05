import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('MarketplacesChannelCatalogsGlobalApi', api.MarketplacesChannelCatalogsGlobalApi)
.service('MarketplacesChannelCatalogsPublicationsApi', api.MarketplacesChannelCatalogsPublicationsApi)
.service('MarketplacesChannelCatalogsSettingsApi', api.MarketplacesChannelCatalogsSettingsApi)

export default apiModule;
