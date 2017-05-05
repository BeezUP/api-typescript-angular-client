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

export interface ChannelCatalogProductInfo {
    /**
     * The product identifier
     */
    "productId": string;
    /**
     * The product SKU
     */
    "productSku": string;
    /**
     * The product tile
     */
    "productTitle": string;
    /**
     * The product image Url
     */
    "productImageUrl": string;
    /**
     * Indicates if the product still exists in your catalog
     */
    "productActive": boolean;
    "overrides": models.ProductOverrides;
    /**
     * Indicates if the product has been disabled or not
     */
    "disabled": boolean;
    /**
     * Indicates if the product's category has been mapped to a channel category
     */
    "categoryMapped": boolean;
    /**
     * Indicates if the product has been excluded by a exclusion filter
     */
    "excluded": boolean;
    "excludedBy"?: Array<models.ExclusionFilterName>;
    "links": models.ChannelCatalogProductInfoLinks;
}
