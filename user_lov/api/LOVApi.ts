/**
 * User - List of Values
 * This API gives you access to list of values.
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

export class LOVApi {
    protected basePath = 'https://api.beezup.com/v2/user/lov';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get all list names
        * 
        */
    public getUserListNames (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.BeezUPCommonLOVLink2>> {
        const localVarPath = this.basePath + '/';

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
        * Get the list of values related to this list name
        * 
        * @param listName The list of value name your want to get
        * @param acceptLanguage Indicates that the client accepts the following languages.
        */
    public getUserListOfValues (listName: string, acceptLanguage?: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.BeezUPCommonListOfValueItem>> {
        const localVarPath = this.basePath + '/{listName}'
            .replace('{' + 'listName' + '}', String(listName));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'listName' is not null or undefined
        if (listName === null || listName === undefined) {
            throw new Error('Required parameter listName was null or undefined when calling getUserListOfValues.');
        }
        headerParams['Accept-Language'] = acceptLanguage;

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
