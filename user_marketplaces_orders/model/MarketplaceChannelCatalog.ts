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
 * This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
 */
export interface MarketplaceChannelCatalog {
    "marketplaceTechnicalCode": models.BeezUPCommonMarketplaceTechnicalCode;
    "marketplaceBusinessCode": models.BeezUPCommonMarketplaceBusinessCode;
    /**
     * The marketplace identifier in the marketplace
     */
    "marketplaceMarketPlaceId": string;
    /**
     * The marketplace country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Decoding_table for more details)
     */
    "marketplaceIsoCountryCodeAlpha2": string;
    "beezUPChannelId": models.BeezUPCommonChannelId;
    "beezUPChannelCatalogId": models.BeezUPCommonChannelCatalogId;
    "beezUPStoreId": models.BeezUPCommonStoreId;
    /**
     * The store name
     */
    "beezUPStoreName": string;
    /**
     * The marketplace merchant identifier list
     */
    "marketplaceMerchantIdentifiers"?: { [key: string]: string; };
    "marketplaceAccountId"?: models.BeezUPCommonMarketplaceAccountId;
    "lovLinks": models.MarketplaceChannelCatalogLovLinks;
    "links": models.MarketplaceChannelCatalogLinks;
}

