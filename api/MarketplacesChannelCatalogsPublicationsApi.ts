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

export class MarketplacesChannelCatalogsPublicationsApi {
    protected basePath = 'https://api.beezup.com/v2';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Fetch the publication history for an account, sorted by descending start date
        * 
        * @param marketplaceTechnicalCode Marketplace Technical Code to query (required)
        * @param accountId Account Id to query (required)
        * @param channelCatalogId Channel Catalog Id by which to filter (optional)
        * @param count Amount of entries to fetch (optional, default set to 10)
        * @param publicationTypes Publication types by which to filter (optional)
        */
    public getPublications (marketplaceTechnicalCode: string, accountId: number, channelCatalogId?: string, count?: number, publicationTypes?: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AccountPublications> {
        const localVarPath = this.basePath + '/user/marketplaces/channelcatalogs/publications/{marketplaceTechnicalCode}/{accountId}/history'
            .replace('{' + 'marketplaceTechnicalCode' + '}', String(marketplaceTechnicalCode))
            .replace('{' + 'accountId' + '}', String(accountId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'marketplaceTechnicalCode' is not null or undefined
        if (marketplaceTechnicalCode === null || marketplaceTechnicalCode === undefined) {
            throw new Error('Required parameter marketplaceTechnicalCode was null or undefined when calling getPublications.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getPublications.');
        }
        if (channelCatalogId !== undefined) {
            queryParameters['channelCatalogId'] = channelCatalogId;
        }

        if (count !== undefined) {
            queryParameters['count'] = count;
        }

        if (publicationTypes !== undefined) {
            queryParameters['publicationTypes'] = publicationTypes;
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
