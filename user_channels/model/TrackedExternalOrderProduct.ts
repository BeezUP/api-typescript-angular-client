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

export interface TrackedExternalOrderProduct {
    /**
     * The product sku received related to the external order.
     */
    "productSku": string;
    /**
     * We tried to get the catalog product title based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    "productTitle"?: string;
    /**
     * We tried to get the catalog product image Url based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    "productImageUrl"?: string;
    /**
     * We tried to get the catalog product if it's still active based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    "productActive"?: boolean;
    /**
     * We tried to get the catalog product identifier based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    "productId"?: string;
    /**
     * The product's unit price related to this external order. This property is voluntarily a string because the value could be an invalid one.
     */
    "unitPrice"?: string;
    /**
     * Indicate the product's quantity ordered. This property is voluntarily a string because the value could be an invalid one
     */
    "quantity"?: string;
    /**
     * Indicate the product's margin related to this order. This property is voluntarily a string because the value could be an invalid one
     */
    "margin"?: string;
}

