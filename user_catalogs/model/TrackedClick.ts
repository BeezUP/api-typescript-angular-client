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

export interface TrackedClick {
    /**
     * The utc date of the click
     */
    "utcDate": Date;
    "product": models.BeezUPCommonProductBasicInfo;
    /**
     * The user's IP address related to this click
     */
    "ipAddress": string;
    "channel": models.BeezUPCommonChannelBasicInfo;
}

