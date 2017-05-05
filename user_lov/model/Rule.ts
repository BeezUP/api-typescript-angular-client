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

export interface Rule {
    /**
     * The identifier of the rule
     */
    "ruleId": string;
    /**
     * The name of the rule
     */
    "ruleName": string;
    "lastExecutionStatus"?: models.RuleLastExecutionStatus;
    /**
     * The utc date of the last execution
     */
    "lastExecutionUtcDate"?: Date;
    "actionName": models.OptimisationActionName;
    /**
     * Report filter identifier linked to the rule
     */
    "reportFilterId": string;
    /**
     * Rule execution position
     */
    "position": number;
    /**
     * Is the rule enabled
     */
    "enabled": boolean;
    /**
     * Rule validity start utc date
     */
    "validityStartUtcDate"?: Date;
    /**
     * Rule validity end utc date
     */
    "validityEndUtcDate"?: Date;
    "links": models.RuleLinks;
}

