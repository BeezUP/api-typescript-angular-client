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

export interface BeezUPCommonLinkParameter3 {
    /**
     * The value of the parameter
     */
    "value"?: string;
    "required"?: boolean;
    /**
     * * path: if the parameter must be pass in the path uri * header: if the parameter must be passed in http header * query: if the parameter must be passed in querystring * body: if the paramter must be passed in the body 
     */
    "in"?: BeezUPCommonLinkParameter3.ModelInEnum;
    /**
     * The value type of the parameter
     */
    "type"?: BeezUPCommonLinkParameter3.TypeEnum;
    /**
     * This parameter expect the values indicated in this list of values.
     */
    "lovLink"?: models.BeezUPCommonLOVLink2;
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

export namespace BeezUPCommonLinkParameter3 {
    export enum ModelInEnum {
        Path = <any> 'path',
        Header = <any> 'header',
        Query = <any> 'query',
        Body = <any> 'body'
    }
    export enum TypeEnum {
        String = <any> 'string',
        Integer = <any> 'integer',
        Number = <any> 'number',
        Boolean = <any> 'boolean',
        Object = <any> 'object',
        Array = <any> 'array',
        Date = <any> 'date',
        DateTime = <any> 'date-time'
    }
}
