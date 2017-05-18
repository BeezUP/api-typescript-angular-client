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

export interface BeezUPCommonLinkParameterProperty3 {
    /**
     * The label corresponding to the link parameter property. This label is automatically translated based on the Accept-Language http header.
     */
    "label"?: string;
    /**
     * The value of the parameter. It can be an integer a string or an object.
     */
    "value"?: any;
    "required"?: boolean;
    "type": models.BeezUPCommonParameterType;
    "lovLink"?: models.BeezUPCommonLOVLink3;
    /**
     * If true, you MUST use indicate a value from the list of values otherwise it's a freetext
     */
    "lovRequired"?: boolean;
    /**
     * description of the parameter
     */
    "description"?: string;
    /**
     * schema of the parameter
     */
    "schema"?: string;
}
