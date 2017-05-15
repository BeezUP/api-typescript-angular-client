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

export interface ChannelCatalogExportationReporting {
    /**
     * The exportation UTC date
     */
    "exportationUtcDate": Date;
    /**
     * The exportation duration. \\ '00:01:00' measn 1 minute. 
     */
    "exportationDuration"?: string;
    /**
     * The cache status during the exportation
     */
    "cacheStatus"?: ChannelCatalogExportationReporting.CacheStatusEnum;
    /**
     * The exportated product count during this exportation
     */
    "exportedProductCount"?: number;
    /**
     * The IP address of the client who requests this exportation
     */
    "clientIpAddress": string;
    /**
     * The http header User-Agent sent by the client who requests this operation
     */
    "clientUserAgent": string;
}

export namespace ChannelCatalogExportationReporting {
    export enum CacheStatusEnum {
        Error = <any> 'Error',
        Available = <any> 'Available',
        GeneratedManually = <any> 'GeneratedManually'
    }
}
