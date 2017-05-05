/**
 * Public - List of Values
 * This API gives you public list of values.
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
 * Describe the way you have to follow to get access to the LOV
 */
export interface BeezUPCommonLOVLink2 {
    /**
     * Indicate the relation name related to the link
     */
    "rel"?: string;
    /**
     * Indicate the relative uri pattern to the list of value
     */
    "href"?: string;
    /**
     * The name of the list of value
     */
    "listName": string;
}

