/**
 * Channels
 * This api allows you to get access to your channels
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

export class ChannelsGlobalApi {
    protected basePath = 'https://api.beezup.com/v2/user/channels';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * List all available channel for this store
        * 
        * @param storeId The store identifier
        */
    public getAvailableChannels (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ChannelHeader>> {
        const localVarPath = this.basePath + '/';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getAvailableChannels.');
        }
        if (storeId !== undefined) {
            queryParameters['storeId'] = storeId;
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
        * Get channel categories
        * 
        * @param channelId The channel identifier
        * @param acceptEncoding Indicates that the client accepts that the response will be compressed to reduce traffic size.
        */
    public getChannelCategories (channelId: string, acceptEncoding: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelRootCategory> {
        const localVarPath = this.basePath + '/{channelId}/categories'
            .replace('{' + 'channelId' + '}', String(channelId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelId' is not null or undefined
        if (channelId === null || channelId === undefined) {
            throw new Error('Required parameter channelId was null or undefined when calling getChannelCategories.');
        }
        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new Error('Required parameter acceptEncoding was null or undefined when calling getChannelCategories.');
        }
        headerParams['Accept-Encoding'] = acceptEncoding;

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
        * Get channel columns
        * 
        * @param channelId The channel identifier
        * @param acceptEncoding Indicates that the client accepts that the response will be compressed to reduce traffic size.
        * @param request Allow you to filter the channel column identifier list your want to get
        */
    public getChannelColumns (channelId: string, acceptEncoding: Array<string>, request?: Array<models.BeezUPCommonChannelColumnId>, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ChannelColumn>> {
        const localVarPath = this.basePath + '/{channelId}/columns'
            .replace('{' + 'channelId' + '}', String(channelId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelId' is not null or undefined
        if (channelId === null || channelId === undefined) {
            throw new Error('Required parameter channelId was null or undefined when calling getChannelColumns.');
        }
        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new Error('Required parameter acceptEncoding was null or undefined when calling getChannelColumns.');
        }
        headerParams['Accept-Encoding'] = acceptEncoding;

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
        * Get channel information
        * 
        * @param channelId The channel identifier
        */
    public getChannelInfo (channelId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChannelInfo> {
        const localVarPath = this.basePath + '/{channelId}'
            .replace('{' + 'channelId' + '}', String(channelId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'channelId' is not null or undefined
        if (channelId === null || channelId === undefined) {
            throw new Error('Required parameter channelId was null or undefined when calling getChannelInfo.');
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
}
