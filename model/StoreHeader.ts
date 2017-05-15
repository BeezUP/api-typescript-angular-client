/**
 * Public - Security
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

export interface StoreHeader {
    "name": models.StoreName;
    "url": models.StoreUrl;
    "countryIsoCodeAlpha3": models.StoreCountryIsoCodeAlpha3;
    "sectors": models.StoreSectors;
    "storeId": models.BeezUPCommonStoreId;
    "userRole": models.StoreUserRole;
    "status": models.StoreStatus;
    /**
     * The user id of the owner of the store
     */
    "ownerUserId": string;
    /**
     * The share count related to this store
     */
    "shareCount": number;
    /**
     * The creation date of the store
     */
    "creationUtcDate": Date;
    "links"?: models.StoreHeaderLinks;
}

