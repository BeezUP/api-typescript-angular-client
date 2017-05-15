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

export class MarketplacesOrdersExportsApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Request a new Order report exportation to be generated
        * A new file will be generated containing a summary of all the Orders matching the requested filter settings.
        * @param request 
        */
    public exportOrders (request: models.ExportOrderListRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/marketplaces/orders/exportations';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling exportOrders.');
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
        * Get a paginated list of Order report exportations
        * 
        * @param pageNumber The page number you want to get
        * @param pageSize The entry count you want to get
        * @param storeId The store identifier to regroup the order exportations
        */
    public getOrderExportations (pageNumber: number, pageSize: number, storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.OrderExportations> {
        const localVarPath = this.basePath + '/user/marketplaces/orders/exportations';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getOrderExportations.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling getOrderExportations.');
        }
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getOrderExportations.');
        }
        if (pageNumber !== undefined) {
            queryParameters['pageNumber'] = pageNumber;
        }

        if (pageSize !== undefined) {
            queryParameters['pageSize'] = pageSize;
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
}
