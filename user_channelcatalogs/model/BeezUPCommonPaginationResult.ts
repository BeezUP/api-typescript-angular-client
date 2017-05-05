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

export interface BeezUPCommonPaginationResult {
    /**
     * The entry count currently returned
     */
    "entryCount"?: number;
    /**
     * The navigation links 'first', 'last', 'next', 'previous'
     */
    "links"?: Array<models.BeezUPCommonLink2>;
    /**
     * The page count
     */
    "pageCount"?: number;
    /**
     * The total entry count
     */
    "totalEntryCount"?: number;
}

