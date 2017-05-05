/**
 * Customer
 * This API will gives you the ability to : - manage your account - manage your stores - shares your stores with your friends - manage your contracts - access to your invoices 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface OfferRequest {
    "offerId": models.OfferId;
    "storeCount": models.StoreCount;
    "couponDiscountCode"?: models.CouponDiscountCode;
    "couponOfferCode"?: models.CouponOfferCode;
    "billingPeriodInMonth": models.BillingPeriodInMonth;
}

