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

export interface NextContractInfo {
    /**
     * The trial period in month
     */
    "trialPeriodInMonth"?: number;
    /**
     * The percent discount related to the billing period
     */
    "billingPeriodPercentDiscount"?: number;
    /**
     * The discount duration in month
     */
    "discountDurationInMonth"?: number;
    /**
     * The percent of the discount
     */
    "percentDiscount"?: number;
    "offerId"?: models.OfferId;
    "storeCount"?: models.StoreCount;
    /**
     * The start date of your contract
     */
    "startUtcDate"?: Date;
    /**
     * The calculated end date of commitment
     */
    "commitmentCalculatedFinishUtcDate"?: Date;
    /**
     * The billing period in month
     */
    "billingPeriodInMonth"?: number;
    /**
     * The fixed price of your contract
     */
    "fixedPrice"?: number;
    /**
     * The offer name based on /offers
     */
    "offerName"?: string;
    "currencyCode"?: models.BeezUPCommonCurrencyCode;
    "contractId"?: models.ContractId;
    /**
     * The commitment period in month
     */
    "commitmentPeriodInMonth"?: number;
    /**
     * The click included
     */
    "clickIncluded"?: number;
    /**
     * Additional click price
     */
    "additionalClickPrice"?: number;
    /**
     * The IP of the user who creates the contract
     */
    "ipUserCreation"?: string;
    /**
     * The IP of the user who modified the contract
     */
    "ipUserModification"?: string;
    "fixedAndVariableClickInfo"?: models.FixedAndVariableClickModelInfo;
    "variableModelInfo"?: models.VariableModelInfo;
    /**
     * Is commitment is automatically renewed
     */
    "isCommitmentRenewalAutomatically"?: boolean;
    /**
     * The end of your discount
     */
    "discountEndUtcDate"?: Date;
    /**
     * Is the contract is modifiable ?
     */
    "isModifiableContract"?: boolean;
    "links": models.NextContractInfoLinks;
}

