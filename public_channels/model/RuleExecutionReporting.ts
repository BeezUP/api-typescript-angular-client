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

export interface RuleExecutionReporting {
    /**
     * The rule identifier
     */
    "ruleId": string;
    /**
     * The name of the rule
     */
    "ruleName": string;
    /**
     * The start utc date of the execution of the rule
     */
    "startedUtcDate"?: Date;
    /**
     * The completed utc date of the execution of the rule
     */
    "completedUtcDate"?: Date;
    "status": models.RuleExecutionReportingStatus;
    "errorType"?: models.RuleExecutionReportingErrorType;
    /**
     * The count of affected products, active or not
     */
    "affectedProductCount"?: number;
    /**
     * The count of affected active products
     */
    "activeAffectedProductCount"?: number;
    /**
     * The count of affected Channels across all products
     */
    "affectedChannelCount"?: number;
    "optimisationActionName"?: models.OptimisationActionName;
    /**
     * The userId that executed the rule if any
     */
    "userId"?: string;
    "executionSource": models.RuleExecutionReportingExecutionSource;
    /**
     * The url for the excel report for this execution
     */
    "reportUrl"?: string;
    "links"?: models.RuleExecutionReportingLinks;
}
