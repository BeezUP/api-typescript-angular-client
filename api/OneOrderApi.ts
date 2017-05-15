/**
 * BeezUP API
 * This is the RESTful API of BeezUP which allows you to manage everything related to BeezUP
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

export class OneOrderApi {
    protected basePath = 'https://api.beezup.comv2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Change order status
        * 
        * @param marketplaceTechnicalCode The marketplace technical code
        * @param accountId The account identifier
        * @param beezUPOrderId The order BeezUP identifier
        * @param changeOrderType The order change type
        * @param userName Sometimes the user in the e-commerce application is not the same than the subscription key you indicate in your settings. We recommand you to indicate the login of the user in your appplication.
        * @param request 
        * @param ifMatch To ensure that you are making a change on the lastest version of the order. ETag value to identify the order given in the order information. \\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
        * @param testMode If true, the operation will be be commited. But the validation will be taken in account.
        */
    public changeOrder (marketplaceTechnicalCode: string, accountId: number, beezUPOrderId: string, changeOrderType: string, userName: string, request: models.ChangeOrderRequest, ifMatch: string, testMode?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/{changeOrderType}'
            .replace('{' + 'marketplaceTechnicalCode' + '}', String(marketplaceTechnicalCode))
            .replace('{' + 'accountId' + '}', String(accountId))
            .replace('{' + 'beezUPOrderId' + '}', String(beezUPOrderId))
            .replace('{' + 'changeOrderType' + '}', String(changeOrderType));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'marketplaceTechnicalCode' is not null or undefined
        if (marketplaceTechnicalCode === null || marketplaceTechnicalCode === undefined) {
            throw new Error('Required parameter marketplaceTechnicalCode was null or undefined when calling changeOrder.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling changeOrder.');
        }
        // verify required parameter 'beezUPOrderId' is not null or undefined
        if (beezUPOrderId === null || beezUPOrderId === undefined) {
            throw new Error('Required parameter beezUPOrderId was null or undefined when calling changeOrder.');
        }
        // verify required parameter 'changeOrderType' is not null or undefined
        if (changeOrderType === null || changeOrderType === undefined) {
            throw new Error('Required parameter changeOrderType was null or undefined when calling changeOrder.');
        }
        // verify required parameter 'userName' is not null or undefined
        if (userName === null || userName === undefined) {
            throw new Error('Required parameter userName was null or undefined when calling changeOrder.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling changeOrder.');
        }
        // verify required parameter 'ifMatch' is not null or undefined
        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling changeOrder.');
        }
        if (userName !== undefined) {
            queryParameters['userName'] = userName;
        }

        if (testMode !== undefined) {
            queryParameters['testMode'] = testMode;
        }

        headerParams['If-Match'] = ifMatch;

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
        * Clear the merchant info related to this order
        * 
        * @param marketplaceTechnicalCode The marketplace technical code
        * @param accountId The account identifier
        * @param beezUPOrderId The order BeezUP identifier
        */
    public clearMerchantOrderInfo (marketplaceTechnicalCode: string, accountId: number, beezUPOrderId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/clearMerchantOrderInfo'
            .replace('{' + 'marketplaceTechnicalCode' + '}', String(marketplaceTechnicalCode))
            .replace('{' + 'accountId' + '}', String(accountId))
            .replace('{' + 'beezUPOrderId' + '}', String(beezUPOrderId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'marketplaceTechnicalCode' is not null or undefined
        if (marketplaceTechnicalCode === null || marketplaceTechnicalCode === undefined) {
            throw new Error('Required parameter marketplaceTechnicalCode was null or undefined when calling clearMerchantOrderInfo.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling clearMerchantOrderInfo.');
        }
        // verify required parameter 'beezUPOrderId' is not null or undefined
        if (beezUPOrderId === null || beezUPOrderId === undefined) {
            throw new Error('Required parameter beezUPOrderId was null or undefined when calling clearMerchantOrderInfo.');
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
        * Get order details
        * 
        * @param marketplaceTechnicalCode The marketplace technical code
        * @param accountId The account identifier
        * @param beezUPOrderId The order BeezUP identifier
        * @param ifNoneMatch ETag value to identify the order given in the order information. \\ For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3 
        */
    public getOrder (marketplaceTechnicalCode: string, accountId: number, beezUPOrderId: string, ifNoneMatch?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Order> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}'
            .replace('{' + 'marketplaceTechnicalCode' + '}', String(marketplaceTechnicalCode))
            .replace('{' + 'accountId' + '}', String(accountId))
            .replace('{' + 'beezUPOrderId' + '}', String(beezUPOrderId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'marketplaceTechnicalCode' is not null or undefined
        if (marketplaceTechnicalCode === null || marketplaceTechnicalCode === undefined) {
            throw new Error('Required parameter marketplaceTechnicalCode was null or undefined when calling getOrder.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getOrder.');
        }
        // verify required parameter 'beezUPOrderId' is not null or undefined
        if (beezUPOrderId === null || beezUPOrderId === undefined) {
            throw new Error('Required parameter beezUPOrderId was null or undefined when calling getOrder.');
        }
        headerParams['If-None-Match'] = ifNoneMatch;

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
        * Get the harvest history and the change status operations
        * 
        * @param marketplaceTechnicalCode The marketplace technical code
        * @param accountId The account identifier
        * @param beezUPOrderId The order BeezUP identifier
        */
    public getOrderHistory (marketplaceTechnicalCode: string, accountId: number, beezUPOrderId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.OrderHistory> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history'
            .replace('{' + 'marketplaceTechnicalCode' + '}', String(marketplaceTechnicalCode))
            .replace('{' + 'accountId' + '}', String(accountId))
            .replace('{' + 'beezUPOrderId' + '}', String(beezUPOrderId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'marketplaceTechnicalCode' is not null or undefined
        if (marketplaceTechnicalCode === null || marketplaceTechnicalCode === undefined) {
            throw new Error('Required parameter marketplaceTechnicalCode was null or undefined when calling getOrderHistory.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getOrderHistory.');
        }
        // verify required parameter 'beezUPOrderId' is not null or undefined
        if (beezUPOrderId === null || beezUPOrderId === undefined) {
            throw new Error('Required parameter beezUPOrderId was null or undefined when calling getOrderHistory.');
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
        * Harvest a specific order from the marketplace
        * 
        * @param marketplaceTechnicalCode The marketplace technical code
        * @param accountId The account identifier
        * @param beezUPOrderId The order BeezUP identifier
        */
    public harvestOrder (marketplaceTechnicalCode: string, accountId: number, beezUPOrderId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/harvest'
            .replace('{' + 'marketplaceTechnicalCode' + '}', String(marketplaceTechnicalCode))
            .replace('{' + 'accountId' + '}', String(accountId))
            .replace('{' + 'beezUPOrderId' + '}', String(beezUPOrderId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'marketplaceTechnicalCode' is not null or undefined
        if (marketplaceTechnicalCode === null || marketplaceTechnicalCode === undefined) {
            throw new Error('Required parameter marketplaceTechnicalCode was null or undefined when calling harvestOrder.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling harvestOrder.');
        }
        // verify required parameter 'beezUPOrderId' is not null or undefined
        if (beezUPOrderId === null || beezUPOrderId === undefined) {
            throw new Error('Required parameter beezUPOrderId was null or undefined when calling harvestOrder.');
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
        * Associate your merchant order identifier to this order
        * 
        * @param marketplaceTechnicalCode The marketplace technical code
        * @param accountId The account identifier
        * @param beezUPOrderId The order BeezUP identifier
        * @param request 
        */
    public setMerchantOrderInfo (marketplaceTechnicalCode: string, accountId: number, beezUPOrderId: string, request: models.SetMerchantOrderInfoRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/setMerchantOrderInfo'
            .replace('{' + 'marketplaceTechnicalCode' + '}', String(marketplaceTechnicalCode))
            .replace('{' + 'accountId' + '}', String(accountId))
            .replace('{' + 'beezUPOrderId' + '}', String(beezUPOrderId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'marketplaceTechnicalCode' is not null or undefined
        if (marketplaceTechnicalCode === null || marketplaceTechnicalCode === undefined) {
            throw new Error('Required parameter marketplaceTechnicalCode was null or undefined when calling setMerchantOrderInfo.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling setMerchantOrderInfo.');
        }
        // verify required parameter 'beezUPOrderId' is not null or undefined
        if (beezUPOrderId === null || beezUPOrderId === undefined) {
            throw new Error('Required parameter beezUPOrderId was null or undefined when calling setMerchantOrderInfo.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling setMerchantOrderInfo.');
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
