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

/**
 * Represents the general settings of your channel catalog
 */
export interface GeneralSettings {
    /**
     * If true then you authorize disclosure of my statistics generated from clicks and sales
     */
    "acceptToPublishInfo": boolean;
    /**
     * Activate bidding for this channel
     */
    "useBid": boolean;
    /**
     * Indicates that the channel authorize you to do not map your categories with their categories
     */
    "noCategoryMapping": boolean;
    /**
     * Do not export \"out of stock\" products. Note: this option is not taken into account by the counter. 
     */
    "doNotExportOutOfStockProducts": boolean;
    /**
     * Activate BeezUP tracking for my statistics (checked by default)
     */
    "activeBeezUPTracking": boolean;
}

