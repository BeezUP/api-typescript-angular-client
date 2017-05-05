import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('ChannelCatalogsCategoryMappingsApi', api.ChannelCatalogsCategoryMappingsApi)
.service('ChannelCatalogsColumnMappingsApi', api.ChannelCatalogsColumnMappingsApi)
.service('ChannelCatalogsExclusionFiltersApi', api.ChannelCatalogsExclusionFiltersApi)
.service('ChannelCatalogsGlobalApi', api.ChannelCatalogsGlobalApi)
.service('ChannelCatalogsProductsApi', api.ChannelCatalogsProductsApi)
.service('ChannelCatalogsProductsOptimisationApi', api.ChannelCatalogsProductsOptimisationApi)
.service('ChannelCatalogsProductsOverridesApi', api.ChannelCatalogsProductsOverridesApi)
.service('ChannelCatalogsSettingsApi', api.ChannelCatalogsSettingsApi)

export default apiModule;
