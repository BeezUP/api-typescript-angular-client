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
 * The request message to make a mapping between catalog category path and a channel category path
 */
export interface MapCategoryRequest {
    /**
     * Great feature! In case of mapping to parent channel category, you can ask to override the mapping of all sub channel category to this catalog category path
     */
    "overrideSubCategoryMappings": boolean;
    /**
     * Great feature! In case of mapping to parent catalog category, you can ask to automatically map new sub catalog category in the next importation to this channel category path.
     */
    "autoMapNewSubCategories": boolean;
    "channelCatalogCategoryMapping": models.ChannelCatalogCategoryMapping;
}

