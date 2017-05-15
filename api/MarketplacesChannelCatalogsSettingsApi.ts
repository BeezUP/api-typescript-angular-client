/**
 * Public - Security
 * This API will allow you to create your account and to get your tokens. \\ If you lost your password, you have an operation to get it back. 
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

export class MarketplacesChannelCatalogsSettingsApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get the marketplace properties for a channel catalog
        * 
        * @param channelCatalogId 
        */
    public getChannelCatalogMarketplaceProperties (channelCatalogId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelCatalogMarketplaceProperties> {
        const localVarPath = this.basePath + '/user/marketplaces/channelcatalogs/{channelCatalogId}/properties'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling getChannelCatalogMarketplaceProperties.');
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
        * Get the marketplace settings for a channel catalog
        * 
        * @param channelCatalogId Channel Catalog Id to query (required)
        */
    public getChannelCatalogMarketplaceSettings (channelCatalogId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelCatalogMarketplaceSettings> {
        const localVarPath = this.basePath + '/user/marketplaces/channelcatalogs/{channelCatalogId}/settings'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling getChannelCatalogMarketplaceSettings.');
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
        * Save new marketplace settings for a channel catalog
        * Allow you to configure your marketplace settings.  Partial update accepted. 
        * @param channelCatalogId Channel Catalog Id to query
        * @param model Settings to save
        */
    public setChannelCatalogMarketplaceSettings (channelCatalogId: string, model: models.SetChannelCatalogMarketplaceSettingsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/marketplaces/channelcatalogs/{channelCatalogId}/settings'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling setChannelCatalogMarketplaceSettings.');
        }
        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling setChannelCatalogMarketplaceSettings.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: model,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
