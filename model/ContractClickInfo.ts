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
 * Describe the click information related to the offer.
 */
export interface ContractClickInfo {
    /**
     * The addition click price in the offer
     */
    "additionalClickPrice"?: number;
    /**
     * The click included in the offer
     */
    "clickIncluded"?: number;
    /**
     * The click included in your current contract
     */
    "initialOfferClickIncluded"?: number;
}

