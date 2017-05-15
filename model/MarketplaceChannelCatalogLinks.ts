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
 * Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
 */
export interface MarketplaceChannelCatalogLinks {
    "properties": models.LinksGetChannelCatalogMarketplacePropertiesLink;
    "settings": models.LinksGetChannelCatalogMarketplaceSettingsLink;
    "publications"?: models.LinksGetPublicationsLink;
}

