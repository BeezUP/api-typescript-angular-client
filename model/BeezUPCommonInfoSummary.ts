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

export interface BeezUPCommonInfoSummary {
    "informationCode"?: string;
    "informationMessage"?: string;
    "informationArguments"?: { [key: string]: string; };
    "propertyName"?: string;
    "propertyValue"?: string;
    "objectName"?: string;
}

