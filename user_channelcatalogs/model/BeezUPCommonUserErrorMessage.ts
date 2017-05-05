/**
 * Catalogs
 * This API allows you to manage your catalogs
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface BeezUPCommonUserErrorMessage {
    "docUrl"?: models.BeezUPCommonDocUrl;
    /**
     * the error code. The error code can be a pattern containing the argument's name
     */
    "code": string;
    /**
     * The error message
     */
    "message": string;
    /**
     * If the error is translated, the culture name will be indicated
     */
    "cultureName"?: string;
    /**
     * a dictionary string/object
     */
    "arguments"?: Array<models.BeezUPCommonUserErrorMessageArguments>;
}

