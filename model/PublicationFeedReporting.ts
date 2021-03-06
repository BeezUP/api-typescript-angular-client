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
 * Publication feed reporting
 */
export interface PublicationFeedReporting {
    "feedType": models.FeedType;
    /**
     * The feed publication start time (UTC timezone)
     */
    "startUtcDate": Date;
    /**
     * The feed publication end time (UTC timezone)
     */
    "endUtcDate"?: Date;
    /**
     * The processing status
     */
    "processingStatus": string;
    /**
     * The product count downloaded from BeezUP Export
     */
    "exportedProducts"?: number;
    /**
     * The item count (products or offers) sent to the marketplace
     */
    "transmittedItems"?: number;
    /**
     * The item count (products or offers) the marketplace flagged as successful
     */
    "publishedItems"?: number;
    /**
     * The item count (products or offers) the marketplace flagged as successful with warnings
     */
    "publishedItemsWithWarning"?: number;
    /**
     * The item count (products or offers) the marketplace flagged as failed
     */
    "failedItems"?: number;
    /**
     * The error message
     */
    "errorMessage"?: string;
    /**
     * The Url for the Html Report generated
     */
    "htmlReportUrl"?: string;
    /**
     * The error message if the Html Report generation failed
     */
    "htmlReportGenerationErrorMessage"?: string;
    /**
     * Indicates if the publication is completed or not
     */
    "completed"?: boolean;
}

