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

export class ChannelCatalogsSettingsApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Disable a channel catalog
        * 
        * @param channelCatalogId The channel catalog identifier
        * @param request 
        */
    public configureChannelCatalogCostSettings (channelCatalogId: string, request: models.CostSettings, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/channelCatalogs/{channelCatalogId}/settings/cost'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling configureChannelCatalogCostSettings.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling configureChannelCatalogCostSettings.');
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
        * Disable a channel catalog
        * 
        * @param channelCatalogId The channel catalog identifier
        * @param request 
        */
    public configureChannelCatalogGeneralSettings (channelCatalogId: string, request: models.GeneralSettings, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/channelCatalogs/{channelCatalogId}/settings/general'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling configureChannelCatalogGeneralSettings.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling configureChannelCatalogGeneralSettings.');
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
        * Disable a channel catalog
        * 
        * @param channelCatalogId The channel catalog identifier
        */
    public disableChannelCatalog (channelCatalogId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/channelCatalogs/{channelCatalogId}/disable'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling disableChannelCatalog.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
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
        * Enable a channel catalog
        * 
        * @param channelCatalogId The channel catalog identifier
        */
    public enableChannelCatalog (channelCatalogId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/channelCatalogs/{channelCatalogId}/enable'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling enableChannelCatalog.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
