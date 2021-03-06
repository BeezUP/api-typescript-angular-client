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
 * Describe the prorata info based on your previous invoice
 */
export interface PreviousFixPeriodInvoiceProrataInfo {
    /**
     * The prorata amount
     */
    "computedProrataToBeDeducted"?: number;
    /**
     * The previous invoice number
     */
    "invoiceNumber"?: string;
    /**
     * The amount to be payed of the previous invoice
     */
    "amountToBePaid"?: number;
    /**
     * The amout after tax of the previous invoice
     */
    "amountAfterTax"?: number;
    /**
     * The contract id related to the previous invoice
     */
    "contractId"?: string;
    /**
     * The fixed end period of the previous invoice
     */
    "fixedPeriodEndDate"?: Date;
    /**
     * The fixed start period of the previous invoice
     */
    "fixedPeriodStartDate"?: Date;
}

