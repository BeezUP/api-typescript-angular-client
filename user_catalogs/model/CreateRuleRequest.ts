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

import * as models from './models';

export interface CreateRuleRequest {
    "optimisationActionName": models.OptimisationActionName;
    /**
     * The name of the rule
     */
    "ruleName": string;
    /**
     * The report filter to use for the rule
     */
    "reportFilterId": string;
    /**
     * The start validity utc date of the rule
     */
    "startUtcDate"?: Date;
    /**
     * The end validity utc date of the rule
     */
    "endUtcDate"?: Date;
}

