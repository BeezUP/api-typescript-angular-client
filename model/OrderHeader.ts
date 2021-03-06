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
 * Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
 */
export interface OrderHeader {
    "marketplaceTechnicalCode": models.BeezUPCommonMarketplaceTechnicalCode;
    "accountId": models.AccountId;
    "beezUPOrderId": models.BeezUPOrderId;
    "beezUPOrderUrl"?: models.BeezUPCommonHttpUrl;
    "marketplaceBusinessCode": models.BeezUPCommonMarketplaceBusinessCode;
    "orderMarketplaceOrderId": models.MarketplaceOrderId;
    "orderStatusBeezUPOrderStatus": models.BeezUPOrderStatus;
    "orderStatusMarketplaceOrderStatus"?: models.MarketplaceOrderStatus;
    "orderMerchantOrderId"?: models.OrderMerchantOrderId;
    "orderMerchantECommerceSoftwareName"?: models.OrderMerchantECommerceSoftwareName;
    "orderMerchantECommerceSoftwareVersion"?: models.OrderMerchantECommerceSoftwareVersion;
    /**
     * The purchase date of this order
     */
    "orderPurchaseUtcDate": Date;
    /**
     * The last modification UTC date done by BeezUP of this order
     */
    "orderLastModificationUtcDate": Date;
    /**
     * The last modification UTC date done by the marketplace on this order
     */
    "orderMarketplaceLastModificationUtcDate": Date;
    "orderBuyerName"?: models.OrderBuyerName;
    /**
     * The total price of this order (corresponding to the amount paid by the customer)
     */
    "orderTotalPrice"?: number;
    "orderCurrencyCode"?: models.BeezUPCommonCurrencyCode;
    "processing": models.Processing;
    "etag": models.Etag;
    "links": models.OrderHeaderLinks;
}

