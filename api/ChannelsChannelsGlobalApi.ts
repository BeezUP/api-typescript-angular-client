/**
 * BeezUP API
 * # The REST API of BeezUP system ## Overview The REST APIs provide programmatic access to read and write BeezUP data.  Basically, with this API you will be able to do everything like you were with your browser on https://go.beezup.com !  The main features are: - Register and manage your account - Create and manage and share your stores with your friends/co-workers. - Import your product catalog and schedule the auto importation - Search the channels your want to use - Configure your channels for your catalogs to export your product information:     - cost and general settings     - category and columns mappings     - your will be able to create and manage your custom column     - put in place exlusion filters based on simple conditions on your product data     - override product values     - get product vision for a channel catalog scope - Analyze and optimize your performance of your catalogs on all yours channels with different type of reportings by day, channel, category and by product. - Automatize your optimisation by using rules! - And of course... Manage your orders harvested from all your marketplaces:     - Synchronize your orders in an uniformized way     - Get the available actions and update the order status - ...and more!  ## Authentication credentials The public API with the base path **_/v2/public** have been put in place to give you an entry point to our system for the user registration, login and lost password. The public API does not require any credentials. We give you the some public list of values and public channels for our public commercial web site [www.beezup.com](http://www.beezup.com).  The user API with the base path **_/v2/user** requires a token which is available on this page: https://go.beezup.com/Account/MyAccount  ## Things to keep in mind ### API Rate Limits - The BeezUP REST API is limited to 100 calls/minute.  ### Media type The default media type for requests and responses is application/json. Where noted, some operations support other content types. If no additional content type is mentioned for a specific operation, then the media type is application/json.  ### Required content type The required and default encoding for the request and responses is UTF8.  ### Required date time format All our date time are formatted in ISO 8601 format: 2014-06-24T16:25:00Z.  ### Base URL The Base URL of the BeezUP API Order Management REST API conforms to the following template.  https://api.beezup.com  All URLs returned by the BeezUP API are relative to this base URL, and all requests to the REST API must use this base URL template.  You can test our API on https://api-docs.beezup.com/swagger-ui\\ You can contact us on [gitter, #BeezUP/API](https://gitter.im/beezUP/API) 
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

export class ChannelsChannelsGlobalApi {
    protected basePath = 'https://api.beezup.com/v2';
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
        const localVarPath = this.basePath + '/user/channels/';

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
        const localVarPath = this.basePath + '/user/channels/{channelId}/categories'
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
        const localVarPath = this.basePath + '/user/channels/{channelId}/columns'
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
        const localVarPath = this.basePath + '/user/channels/{channelId}'
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
