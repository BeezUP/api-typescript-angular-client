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

/**
 * Describe the discount information related to the offer.
 */
export interface ContractDiscountInfo {
    /**
     * The amount discounted per month
     */
    "amountCodePromoDiscountPerMonth"?: number;
    /**
     * Duration of the discount in month
     */
    "discountDurationInMonth"?: number;
    /**
     * Percentage of the discount
     */
    "percentDiscount"?: number;
    "promotionalCodeValidity"?: models.PromotionalCodeValidity;
    /**
     * The discount amount
     */
    "amountCodePromoDiscount"?: number;
    /**
     * The discount code
     */
    "couponDiscountCode"?: string;
    /**
     * Internal use: The discount id
     */
    "couponDiscountId"?: number;
    /**
     * Is this discount is related to a coupon offer
     */
    "isCouponDiscountLinkedToCouponOffer"?: boolean;
    /**
     * Do you have currently a discount on your contract ?
     */
    "customerHasActualDiscount"?: boolean;
}

