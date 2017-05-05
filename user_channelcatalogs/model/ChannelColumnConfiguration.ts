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
 * The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
 */
export interface ChannelColumnConfiguration {
    "columnImportance": models.BeezUPCommonColumnImportance;
    "columnDataType": models.BeezUPCommonColumnDataType;
    "beezUPColumnName"?: models.BeezUPCommonBeezUPColumnName;
}

