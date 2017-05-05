/**
 * Marketplaces - Channel catalogs
 * This API allows you to manage your channel catalogs\\' marketplace settings and fetch your account\\'s catalog publication history
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
 * Model for fetching a channel catalog marketplace setting
 */
export interface ChannelCatalogMarketplaceSetting {
    /**
     * Channel catalog marketplace property name
     */
    "name": string;
    /**
     * Channel catalog marketplace property values
     */
    "values"?: Array<string>;
}
