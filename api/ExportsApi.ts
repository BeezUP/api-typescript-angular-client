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

export class ExportsApi {
    protected basePath = 'https://api.beezup.comv2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Export orders
        * This will create a file with all your orders related to your filter
        * @param format The type of the file to export
        * @param request 
        */
    public exportOrders (format: string, request: models.ExportOrderListRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/exportations';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('Required parameter format was null or undefined when calling exportOrders.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling exportOrders.');
        }
        if (format !== undefined) {
            queryParameters['format'] = format;
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
        * Get the order exportation list
        * 
        * @param pageNumber The page number you want to get
        * @param pageSize The count of orders exportation you want to get
        */
    public getOrderExportations (pageNumber: number, pageSize: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.OrderExportations> {
        const localVarPath = this.basePath + '/v2/user/marketplaces/orders/exportations';

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
        if (pageNumber !== undefined) {
            queryParameters['pageNumber'] = pageNumber;
        }

        if (pageSize !== undefined) {
            queryParameters['pageSize'] = pageSize;
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
