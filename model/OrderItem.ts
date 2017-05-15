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
 * Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
 */
export interface OrderItem {
    /**
     * The BeezUP identifier of the order Item
     */
    "beezUPOrderItemId": string;
    /**
     * The order item type of the order item
     */
    "orderItemOrderItemType": string;
    /**
     * The product id indicated in the catalog importation in BeezUP system for this order item. This property will help you to match the order to the inventory system.
     */
    "orderItemMerchantImportedProductId"?: string;
    /**
     * The column name for the product id indicated in the catalog importation in BeezUP system related to this order item. This property will help you to match the order to the inventory system.
     */
    "orderItemMerchantImportedProductIdColumnName"?: string;
    /**
     * The product url indicated in the catalog importation in BeezUP system related to this order item
     */
    "orderItemMerchantImportedProductUrl"?: string;
    /**
     * The column name indicate in the mapping for the product id related to the order item
     */
    "orderItemMerchantProductIdColumnName"?: string;
    /**
     * The store id in the beezup system related to the order item. This property will help you to match the order to the inventory system.
     */
    "orderItemBeezUPStoreId"?: string;
    /**
     * The tax of the order item
     */
    "orderItemItemTax"?: number;
    /**
     * The title of the order item
     */
    "orderItemTitle"?: string;
    /**
     * The URL of the image of the order item
     */
    "orderItemImageUrl"?: string;
    /**
     * The merchant product id of the order item
     */
    "orderItemMerchantProductId"?: string;
    /**
     * The marketplace product identifier of the order item
     */
    "orderItemMarketPlaceProductId"?: string;
    /**
     * The price of the order item
     */
    "orderItemItemPrice"?: number;
    /**
     * The quantity of the order item
     */
    "orderItemQuantity"?: number;
    /**
     * The total price of the order item
     */
    "orderItemTotalPrice"?: number;
    /**
     * The shipping price of the order item
     */
    "orderItemShippingPrice"?: number;
}

