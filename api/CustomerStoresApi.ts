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

export class CustomerStoresApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Create a new store
        * 
        * @param request 
        */
    public createStore (request: models.CreateStoreRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.LinksGetStoresLink> {
        const localVarPath = this.basePath + '/user/customer/stores';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createStore.');
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
        * Delete a store
        * 
        * @param storeId Your store identifier
        */
    public deleteStore (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/customer/stores/{storeId}'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling deleteStore.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
        * Get store&#39;s information
        * 
        * @param storeId Your store identifier
        */
    public getStore (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StoreHeader> {
        const localVarPath = this.basePath + '/user/customer/stores/{storeId}'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getStore.');
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
        * Get store list
        * 
        */
    public getStores (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Stores> {
        const localVarPath = this.basePath + '/user/customer/stores';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
        * Update some store&#39;s information.
        * Update some store&#39;s information. FYI, you cannot change the country. 
        * @param storeId Your store identifier
        * @param request 
        */
    public updateStore (storeId: string, request: models.UpdateStoreRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/customer/stores/{storeId}'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling updateStore.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateStore.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PATCH',
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
