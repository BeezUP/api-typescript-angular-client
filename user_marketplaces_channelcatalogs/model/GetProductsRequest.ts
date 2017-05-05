/**
 * Catalogs
 * This API allows you to manage your catalogs
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
 * The request message to get products based on these filters
 */
export interface GetProductsRequest {
    /**
     * Search for products containing this SKU (merchant product dentifier).
     */
    "sku"?: string;
    /**
     * Search for products containing this title
     */
    "title"?: string;
    "categoryPath"?: models.BeezUPCommonCatalogCategoryPath;
}

