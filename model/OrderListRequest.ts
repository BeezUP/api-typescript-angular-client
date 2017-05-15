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

export interface OrderListRequest {
    "marketplaceTechnicalCodes"?: Array<models.BeezUPCommonMarketplaceTechnicalCode>;
    "marketplaceBusinessCodes"?: Array<models.BeezUPCommonMarketplaceBusinessCode>;
    /**
     * Account id list
     */
    "accountIds"?: Array<models.AccountId>;
    "beezUPOrderStatuses"?: Array<models.BeezUPOrderStatus>;
    "dateSearchType": models.DateSearchType;
    /**
     * The begin period you want to make the search. \\ The period MUST not be greater than 30 days. The begin period MUST be lower than the end period.  
     */
    "beginPeriodUtcDate": Date;
    /**
     * The end period of you search. \\ The period MUST not be greater than 30 days. \\ The end period MUST be greater than the begin period.  The end period MUST be lower to the current date. 
     */
    "endPeriodUtcDate": Date;
    "orderBuyerName"?: models.OrderBuyerName;
    "marketplaceOrderIds"?: Array<models.MarketplaceOrderId>;
    /**
     * Merchant order id list
     */
    "orderMerchantOrderIds"?: Array<models.OrderMerchantOrderId>;
    "pageSize": models.PageSize;
    "pageNumber": models.PageNumber;
}

