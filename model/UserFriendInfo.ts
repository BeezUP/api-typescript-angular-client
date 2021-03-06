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

export interface UserFriendInfo {
    /**
     * Your friend's user id
     */
    "userId": string;
    /**
     * Your friend's user last name
     */
    "lastName": string;
    /**
     * Your friend's user first name
     */
    "firstName": string;
    "email": models.FriendEmail;
    "profilePictureUrl"?: models.FriendProfilePictureUrl;
    "countryIsoCodeAlpha3": models.FriendCountryIsoCodeAlpha3;
    /**
     * Your friend's user company name
     */
    "company": string;
    /**
     * Your friend's user occupation in his company
     */
    "whatIDo"?: string;
}

