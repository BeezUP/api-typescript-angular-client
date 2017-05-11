/**
 * Marketplaces - Orders
 * The features exposed in this API are centered around managing Orders harvested from your configured marketplaces.\\ This includes: - fetching current information (as known by BeezUP) for a single or multiple Orders, - requesting Order harvest to synchronize your marketplaces and BeezUP accounts, - changing BeezUP data and requesting changes to your marketplaces (accepting, shipping, etc), - configuring automatic changes to marketplace based our newly fetched data, - creating and exporting reports for your Orders. 
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
 * Represent the reporting of the Order report exportations
 */
export interface OrderExportationReporting {
    "abortionUtcDate"?: Date;
    "beginUtcDate"?: Date;
    "blobNameUri"?: string;
    "endUtcDate"?: Date;
    "enqueuedUtcDate": Date;
    "errorMessage"?: string;
    "executionUUID": string;
    "expirationUtcDate"?: Date;
    "failureUtcDate"?: Date;
    "ipAddress": string;
    /**
     * Raw representation of the JSON
     */
    "jsonCriteria"?: string;
    "lastUpdateUtcDate"?: Date;
    "orderCount"?: number;
    "processingStatus": models.OrderExportationReportingProcessingStatus;
    "remainingOrderCount"?: number;
    "resumedUtcDate"?: Date;
    "sourceType": models.SourceType;
    "sourceUserId"?: models.BeezUPCommonUserId;
    "sourceUserName": string;
    "suspendedUtcDate"?: Date;
    "timeoutDuration"?: string;
    "warningMessage"?: string;
}
