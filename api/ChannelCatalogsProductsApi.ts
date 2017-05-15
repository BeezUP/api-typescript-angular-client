/**
 * BeezUP API
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

export class ChannelCatalogsProductsApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get channel catalog products related to these channel catalogs
        * 
        * @param productId The product identifier
        * @param request 
        */
    public getChannelCatalogProductByChannelCatalog (productId: string, request?: models.ChannelCatalogProductByChannelCatalogRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelCatalogProductByChannelCatalogResponse> {
        const localVarPath = this.basePath + '/user/channelCatalogs/products/{productId}'
            .replace('{' + 'productId' + '}', String(productId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling getChannelCatalogProductByChannelCatalog.');
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
        * Get channel catalog product information
        * 
        * @param channelCatalogId The channel catalog identifier
        * @param productId The product identifier
        */
    public getChannelCatalogProductInfo (channelCatalogId: string, productId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelCatalogProductInfo> {
        const localVarPath = this.basePath + '/user/channelCatalogs/{channelCatalogId}/products/{productId}'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId))
            .replace('{' + 'productId' + '}', String(productId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling getChannelCatalogProductInfo.');
        }
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling getChannelCatalogProductInfo.');
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
        * Get channel catalog product information list
        * 
        * @param channelCatalogId The channel catalog identifier
        * @param request The channel catalog product list filter
        */
    public getChannelCatalogProductInfoList (channelCatalogId: string, request?: models.GetChannelCatalogProductInfoListRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelCatalogProductInfoList> {
        const localVarPath = this.basePath + '/user/channelCatalogs/{channelCatalogId}/products'
            .replace('{' + 'channelCatalogId' + '}', String(channelCatalogId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelCatalogId' is not null or undefined
        if (channelCatalogId === null || channelCatalogId === undefined) {
            throw new Error('Required parameter channelCatalogId was null or undefined when calling getChannelCatalogProductInfoList.');
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
