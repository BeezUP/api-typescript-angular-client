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

export interface ChannelCatalog {
    "channelId": models.BeezUPCommonChannelId;
    "channelName": models.BeezUPCommonChannelName;
    "channelImageUrl": models.BeezUPCommonHttpUrl;
    /**
     * Indicates if the channel catalog is active
     */
    "enabled"?: boolean;
    /**
     * Indicates if this channel catalog is related to a marketplace
     */
    "isMarketplace"?: boolean;
    "channelCatalogId": models.BeezUPCommonChannelCatalogId;
    "storeId": models.BeezUPCommonStoreId;
    "generalSettings"?: models.GeneralSettings;
    "costSettings"?: models.CostSettings;
    "columnMappings"?: models.ColumnMappingWithNameList;
    "exclusionFilters"?: models.ExclusionFilters;
    "exportUrl"?: models.BeezUPCommonHttpUrl;
    "status"?: models.ChannelCatalogStatus;
    /**
     * Indicates the actions you can do on a channel catalog
     */
    "links"?: Array<models.BeezUPCommonLink2>;
}

