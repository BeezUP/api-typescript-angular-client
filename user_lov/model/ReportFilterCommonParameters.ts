/**
 * Analytics
 * This API will help you to manage the tracking of your clicks and your sales, get reporting on this trackings and put in place rules based on this reporting to automatically optimize your channel catalogs. \\ Also, you will be able to consult the rule execution reporting. 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * Contains common filter parameters
 */
export interface ReportFilterCommonParameters {
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
}

