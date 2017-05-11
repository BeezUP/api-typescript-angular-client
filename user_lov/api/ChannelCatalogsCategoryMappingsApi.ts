/**
 * Channel Catalogs
 * This api allows you to manage your channel catalogs.   A channel catalog is an association between your store and a channel.  You will be able to: - map your catalog colums to channel columns. - map your catalog categories to the channel categories and define a cost of this category - configure the general and cost settings of the channel - enable or disable a channel - exclude products using filters for a channel - override product values for a channel - disable or reenable a product on a channel 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class ChannelCatalogsCategoryMappingsApi {
    protected basePath = 'https://api.beezup.com/v2/user/channelCatalogs';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get channel catalog categories
        * 
        * @param channelCatalogId The channel catalog identifier
        */
    public getChannelCatalogCategories (channelCatalogId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelCatalogCategoryMappings> {
        const localVarPath = this.basePath + '/{channelCatalogId}/categoryMappings'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling getChannelCatalogCategories.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Map channel catalog category
        * 
        * @param channelCatalogId The channel catalog identifier
        * @param request 
        */
    public mapChannelCatalogCategory (channelCatalogId: string, request: models.MapCategoryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/{channelCatalogId}/categoryMappings/map'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling mapChannelCatalogCategory.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling mapChannelCatalogCategory.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Unmap channel catalog category
        * 
        * @param channelCatalogId The channel catalog identifier
        * @param request 
        */
    public unmapChannelCatalogCategory (channelCatalogId: string, request: models.UnmapCategoryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/{channelCatalogId}/categoryMappings/unmap'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling unmapChannelCatalogCategory.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling unmapChannelCatalogCategory.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}