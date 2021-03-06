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

export class AnalyticsTrackingApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get the latest clicks tracked
        * 
        * @param storeId Your store identifier
        * @param count The click&#39;s count you want to get
        */
    public getStoreTrackedClicks (storeId: string, count?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TrackedClicks> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/tracking/clicks'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getStoreTrackedClicks.');
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
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
        * Get the latest external orders tracked
        * 
        * @param storeId Your store identifier
        * @param count The external order&#39;s count you want to get
        */
    public getStoreTrackedExternalOrders (storeId: string, count?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TrackedExternalOrders> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/tracking/externalorders'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getStoreTrackedExternalOrders.');
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
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
        * Get the latest orders tracked
        * 
        * @param storeId Your store identifier
        * @param count The order&#39;s count you want to get
        */
    public getStoreTrackedOrders (storeId: string, count?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TrackedOrders> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/tracking/orders'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getStoreTrackedOrders.');
        }
        if (count !== undefined) {
            queryParameters['count'] = count;
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
        * Get store tracking synchronization status
        * Your clicks and orders are eventually consistent. \\ This operation indicates you at which date the projections are for this store. 
        * @param storeId Your store identifier
        */
    public getStoreTrackingStatus (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StoreTrackingStatus> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/tracking/status'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getStoreTrackingStatus.');
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
        * Display the synchronization status of the clicks and orders
        * Your clicks and orders are eventually consistent. \\ This operation indicates you at which date the projections are. 
        */
    public getTrackingStatus (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TrackingStatus> {
        const localVarPath = this.basePath + '/user/analytics/tracking/status';

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
}
