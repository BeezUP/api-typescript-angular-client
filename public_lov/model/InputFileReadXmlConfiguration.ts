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

/**
 * The XML file description
 */
export interface InputFileReadXmlConfiguration {
    /**
     * Indicate if the importation should take in account the attribute in the xml nodes.
     */
    "useXmlAttributes": boolean;
    /**
     * Indicate if the children xml nodes should be flatten with there parent to take in account the sub node values.
     */
    "flattenXmlChildElements": boolean;
}

