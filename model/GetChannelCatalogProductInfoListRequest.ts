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

export interface GetChannelCatalogProductInfoListRequest {
    /**
     * Search by product sku. If null the filter will not be taken in account.
     */
    "sku"?: string;
    /**
     * Search by product title. If null the filter will not be taken in account.
     */
    "title"?: string;
    /**
     * Search overrided products. If null the filter will not be taken in account.
     */
    "overrided"?: boolean;
    /**
     * Search disabled products. If null the filter will not be taken in account.
     */
    "disabled"?: boolean;
    /**
     * Search product with category mapped with the channel. If null the filter will not be taken in account.
     */
    "categoryMapped"?: boolean;
    /**
     * Search excluded products by at least an exclusion filter. If null the filter will not be taken in account.
     */
    "excluded"?: boolean;
    /**
     * If false, search for product absent from the current catalog. If null the filter will not be taken in account.
     */
    "active"?: boolean;
}

