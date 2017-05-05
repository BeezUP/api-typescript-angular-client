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

export interface OrderListRequest {
    "marketplaceTechnicalCodes"?: Array<models.MarketplaceTechnicalCode>;
    "marketplaceBusinessCodes"?: Array<models.MarketplaceBusinessCode>;
    /**
     * Account id list
     */
    "accountIds"?: Array<models.AccountId>;
    "beezUPOrderStatuses"?: Array<models.BeezUPOrderStatus>;
    "dateSearchType"?: models.DateSearchType;
    /**
     * The begin period you want to make the search. The period MUST not be greater than 30 days. If null, the current date minus 30 days will be used.
     */
    "beginPeriodUtcDate"?: Date;
    /**
     * The end period of you search. The period MUST not be greater than 30 days. If null the current date will be used.
     */
    "endPeriodUtcDate"?: Date;
    "orderBuyerName"?: models.OrderBuyerName;
    "marketplaceOrderIds"?: Array<models.MarketplaceOrderId>;
    /**
     * Merchant order id list
     */
    "orderMerchantOrderIds"?: Array<models.OrderMerchantOrderId>;
    "pageSize"?: models.PageSize;
    "pageNumber"?: models.PageNumber;
}

