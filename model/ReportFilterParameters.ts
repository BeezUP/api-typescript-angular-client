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

import * as models from './models';

export interface ReportFilterParameters {
    "channelId"?: models.BeezUPCommonChannelId;
    /**
     * The begin date period you want to get the report
     */
    "beginPeriodUtcDate": Date;
    /**
     * The end date period you want to get the report.
     */
    "endPeriodUtcDate": Date;
    "categoryFilter"?: models.ReportCategoryFilter;
    "indicatorFilters"?: Array<models.ReportIndicatorFilter>;
    "advancedFilters": models.ReportAdvancedFilters;
    "reportType": models.ReportType;
    "productState"?: models.ProductStateFilter;
    "productFilters"?: models.ProductFilters;
}

