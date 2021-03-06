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

export interface OfferContent {
    "previousFixPeriodInvoiceProrataInfo": models.PreviousFixPeriodInvoiceProrataInfo;
    "contractBillingPeriodInfo": models.ContractBillingPeriodInfo;
    "contractClickInfo": models.ContractClickInfo;
    "contractCommitmentInfo": models.ContractCommitmentInfo;
    "contractDiscountInfo": models.ContractDiscountInfo;
    "contractMoneyInfo": models.ContractMoneyInfo;
    "contractStoreInfo": models.ContractStoreInfo;
    "contractBonusInfo": models.ContractBonusInfo;
    "contractTerminationReasonType"?: models.ContractTerminationReasonType;
    "contractTerminationReason"?: models.ContractTerminationReason;
    /**
     * Internal usage: Indicates if we have to notify you about VAT exemption.
     */
    "notifyVatExemption": boolean;
}

