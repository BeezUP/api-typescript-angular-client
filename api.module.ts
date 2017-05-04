import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('GroupsApi', api.GroupsApi)
.service('LOVApi', api.LOVApi)
.service('SecurityApi', api.SecurityApi)
.service('UserLOVApi', api.UserLOVApi)
.service('V2UserAnalyticsApi', api.V2UserAnalyticsApi)
.service('V2UserCatalogsApi', api.V2UserCatalogsApi)
.service('V2UserChannelCatalogsApi', api.V2UserChannelCatalogsApi)
.service('V2UserChannelsApi', api.V2UserChannelsApi)
.service('V2UserCustomerApi', api.V2UserCustomerApi)
.service('V2UserMarketplacesChannelCatalogsApi', api.V2UserMarketplacesChannelCatalogsApi)
.service('V2UserMarketplacesOrdersApi', api.V2UserMarketplacesOrdersApi)

export default apiModule;
