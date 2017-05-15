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

