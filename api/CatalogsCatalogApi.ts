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

export class CatalogsCatalogApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Change Catalog Column User Name
        * 
        * @param storeId Your store identifier
        * @param columnId The catalog column identifier
        * @param request 
        */
    public catalogChangeCatalogColumnUserName (storeId: string, columnId: string, request: models.ChangeUserColumnNameRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/catalogColumns/{columnId}/rename'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'columnId' + '}', String(columnId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogChangeCatalogColumnUserName.');
        }
        // verify required parameter 'columnId' is not null or undefined
        if (columnId === null || columnId === undefined) {
            throw new Error('Required parameter columnId was null or undefined when calling catalogChangeCatalogColumnUserName.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling catalogChangeCatalogColumnUserName.');
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
        * Change custom column expression
        * 
        * @param storeId Your store identifier
        * @param columnId The custom column identifier
        * @param request 
        */
    public catalogChangeCustomColumnExpression (storeId: string, columnId: string, request: models.ChangeCustomColumnExpressionRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/customColumns/{columnId}/expression'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'columnId' + '}', String(columnId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogChangeCustomColumnExpression.');
        }
        // verify required parameter 'columnId' is not null or undefined
        if (columnId === null || columnId === undefined) {
            throw new Error('Required parameter columnId was null or undefined when calling catalogChangeCustomColumnExpression.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling catalogChangeCustomColumnExpression.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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
        * Change Custom Column User Name
        * 
        * @param storeId Your store identifier
        * @param columnId The custom column identifier
        * @param request 
        */
    public catalogChangeCustomColumnUserName (storeId: string, columnId: string, request: models.ChangeUserColumnNameRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/customColumns/{columnId}/rename'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'columnId' + '}', String(columnId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogChangeCustomColumnUserName.');
        }
        // verify required parameter 'columnId' is not null or undefined
        if (columnId === null || columnId === undefined) {
            throw new Error('Required parameter columnId was null or undefined when calling catalogChangeCustomColumnUserName.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling catalogChangeCustomColumnUserName.');
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
        * Compute the expression for this catalog.
        * 
        * @param storeId Your store identifier
        * @param request 
        */
    public catalogComputeExpression (storeId: string, request: models.ComputeExpressionRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/customColumns/computeExpression'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogComputeExpression.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling catalogComputeExpression.');
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
        * Delete custom column
        * 
        * @param storeId Your store identifier
        * @param columnId The custom column identifier
        */
    public catalogDeleteCustomColumn (storeId: string, columnId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/customColumns/{columnId}'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'columnId' + '}', String(columnId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogDeleteCustomColumn.');
        }
        // verify required parameter 'columnId' is not null or undefined
        if (columnId === null || columnId === undefined) {
            throw new Error('Required parameter columnId was null or undefined when calling catalogDeleteCustomColumn.');
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
        * Get catalog column list
        * 
        * @param storeId Your store identifier
        */
    public catalogGetCatalogColumns (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CatalogColumns> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/catalogColumns'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogGetCatalogColumns.');
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
        * Get category list
        * 
        * @param storeId Your store identifier
        * @param acceptEncoding Indicates that the client accepts that the response will be compressed to reduce traffic size.
        */
    public catalogGetCategories (storeId: string, acceptEncoding: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Categories> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/categories'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogGetCategories.');
        }
        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new Error('Required parameter acceptEncoding was null or undefined when calling catalogGetCategories.');
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
        * Get the encrypted custom column expression
        * 
        * @param storeId Your store identifier
        * @param columnId The custom column identifier
        */
    public catalogGetCustomColumnExpression (storeId: string, columnId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/customColumns/{columnId}/expression'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'columnId' + '}', String(columnId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogGetCustomColumnExpression.');
        }
        // verify required parameter 'columnId' is not null or undefined
        if (columnId === null || columnId === undefined) {
            throw new Error('Required parameter columnId was null or undefined when calling catalogGetCustomColumnExpression.');
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
        * Get custom column list
        * 
        * @param storeId Your store identifier
        */
    public catalogGetCustomColumns (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CustomColumns> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/customColumns'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogGetCustomColumns.');
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
        * Get product
        * 
        * @param storeId Your store identifier
        * @param productId The product identifier you want to get
        */
    public catalogGetProduct (storeId: string, productId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Product> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/products/{productId}'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'productId' + '}', String(productId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogGetProduct.');
        }
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling catalogGetProduct.');
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
        * Get product list
        * 
        * @param storeId Your store identifier
        * @param request 
        */
    public catalogGetProducts (storeId: string, request?: models.GetProductsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Products> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/products'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogGetProducts.');
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
        * Get random product list
        * 
        * @param storeId Your store identifier
        * @param count The count of random product you want to get
        */
    public catalogGetRandomProducts (storeId: string, count?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Products> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/products/random'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogGetRandomProducts.');
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
        * Create or replace a custom column
        * 
        * @param storeId Your store identifier
        * @param columnId The custom column identifier
        * @param request 
        */
    public catalogSaveCustomColumn (storeId: string, columnId: string, request: models.CreateCustomColumnRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/customColumns/{columnId}'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'columnId' + '}', String(columnId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling catalogSaveCustomColumn.');
        }
        // verify required parameter 'columnId' is not null or undefined
        if (columnId === null || columnId === undefined) {
            throw new Error('Required parameter columnId was null or undefined when calling catalogSaveCustomColumn.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling catalogSaveCustomColumn.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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
        * Get the last input configuration
        * 
        * @param storeId Your store identifier
        */
    public importationGetManualUpdateLastInputConfig (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.LastManualImportInputConfiguration> {
        const localVarPath = this.basePath + '/user/catalogs/{storeId}/inputConfiguration'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling importationGetManualUpdateLastInputConfig.');
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
