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

export interface ReportByProduct {
    "product": models.BeezUPCommonProductBasicInfo;
    /**
     * The count of channel where this product is enabled
     */
    "enabledOnChannelCount": number;
    /**
     * The channel count where this product can be enabled
     */
    "channelCount": number;
    /**
     * The click count for this product
     */
    "clickCount": number;
    /**
     * The cost for this product
     */
    "cost": number;
    /**
     * The order count for this product
     */
    "orderCount": number;
    /**
     * The Turnover for this product
     */
    "turnOver": number;
    /**
     * The margin for this product
     */
    "margin": number;
    /**
     * The performance indicator based on the performance indicator formula indicated in the request for this product
     */
    "performanceIndicator": number;
    /**
     * The action list on this product
     */
    "links": Array<models.BeezUPCommonLink2>;
}

