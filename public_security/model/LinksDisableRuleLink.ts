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

export interface LinksDisableRuleLink {
    "docUrl"?: models.BeezUPCommonDocUrl;
    /**
     * The description of the link
     */
    "description"?: string;
    "href"?: models.BeezUPCommonHref;
    "operationId"?: models.BeezUPCommonOperationId;
    "method"?: models.BeezUPCommonHttpMethod;
    "parameters"?: { [key: string]: models.BeezUPCommonLinkParameter3; };
    /**
     * indicates whether the href is templated or not
     */
    "templated"?: boolean;
    "info"?: models.BeezUPCommonInfoSummaries;
}

