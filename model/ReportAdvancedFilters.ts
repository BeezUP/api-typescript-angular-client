/**
 * Public - Security
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

export interface ReportAdvancedFilters {
    "margingType": models.MargingType;
    /**
     * If the margin type is 'Global', indicate the percentage of sale price.
     */
    "globalMarginPercent"?: number;
    "linkClickToOrderType": models.LinkClickToOrderType;
    /**
     * If the linkOrderType is OnClickDate, indicate the max day to search the click from the order
     */
    "linkClickToOrderMaxDay"?: number;
    /**
     * If true, you will get the only the orders with payment validated. Otherwise, you will get all orders validated or not.
     */
    "onlyPaymentValidatedOrders": boolean;
    /**
     * If true, you will get only direct sales. Otherwise the indirect sales will be included.
     */
    "onlyDirectSales": boolean;
    "performanceIndicatorFormula": models.PerformanceIndicatorFormula;
}

