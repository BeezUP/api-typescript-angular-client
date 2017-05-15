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

export class AnalyticsRulesApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Rule creation
        * 
        * @param storeId Your store identifier
        * @param request 
        */
    public createRule (storeId: string, request: models.CreateRuleRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling createRule.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createRule.');
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
        * Delete Rule
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        */
    public deleteRule (storeId: string, ruleId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling deleteRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling deleteRule.');
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
        * Disable rule
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        */
    public disableRule (storeId: string, ruleId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}/disable'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling disableRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling disableRule.');
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
        * Enable rule
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        */
    public enableRule (storeId: string, ruleId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}/enable'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling enableRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling enableRule.');
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
        * Gets the rule
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        */
    public getRule (storeId: string, ruleId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Rule> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling getRule.');
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
        * Gets the list of rules for a given store
        * 
        * @param storeId Your store identifier
        */
    public getRules (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RuleList> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getRules.');
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
        * Get the rules execution history
        * 
        * @param storeId Your store identifier
        * @param pageNumber The page to retrieve
        * @param pageSize The count of rule history to retrieve
        */
    public getRulesExecutions (storeId: string, pageNumber: number, pageSize: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RuleExecutionReportings> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/executions'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling getRulesExecutions.');
        }
        // verify required parameter 'pageNumber' is not null or undefined
        if (pageNumber === null || pageNumber === undefined) {
            throw new Error('Required parameter pageNumber was null or undefined when calling getRulesExecutions.');
        }
        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling getRulesExecutions.');
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
    /**
        * Move the rule down
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        */
    public moveDownRule (storeId: string, ruleId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}/movedown'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling moveDownRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling moveDownRule.');
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
        * Move the rule up
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        */
    public moveUpRule (storeId: string, ruleId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}/moveup'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling moveUpRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling moveUpRule.');
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
        * Run rule
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        */
    public runRule (storeId: string, ruleId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}/run'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling runRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling runRule.');
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
        * Run all rules for this store
        * 
        * @param storeId Your store identifier
        */
    public runRules (storeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/run'
            .replace('{' + 'storeId' + '}', String(storeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling runRules.');
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
        * Update Rule
        * 
        * @param storeId Your store identifier
        * @param ruleId Your rule identifier
        * @param request 
        */
    public updateRule (storeId: string, ruleId: string, request: models.UpdateRuleRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/user/analytics/{storeId}/rules/{ruleId}'
            .replace('{' + 'storeId' + '}', String(storeId))
            .replace('{' + 'ruleId' + '}', String(ruleId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new Error('Required parameter storeId was null or undefined when calling updateRule.');
        }
        // verify required parameter 'ruleId' is not null or undefined
        if (ruleId === null || ruleId === undefined) {
            throw new Error('Required parameter ruleId was null or undefined when calling updateRule.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateRule.');
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
