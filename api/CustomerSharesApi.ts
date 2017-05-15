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

export class CustomerSharesApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Delete a share to another user
        * 
        * @param storeId Your store identifier
        * @param userId The friend user id
        */
    public deleteShare (storeId: string, userId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/customer/stores/{storeId}/shares/{userId}'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'userId' + '}', String(userId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling deleteShare.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteShare.');
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
        * Get shares related to this store
        * 
        * @param storeId Your store identifier
        */
    public getShares (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StoreShares> {
        const localVarPath = this.basePath + '/user/customer/stores/{storeId}/shares'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getShares.');
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
        * Share a store to another user
        * 
        * @param storeId Your store identifier
        * @param email Your friend&#39;s email
        */
    public share (storeId: string, email: models.FriendEmail, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/customer/stores/{storeId}/shares'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling share.');
        }
        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling share.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: email,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
