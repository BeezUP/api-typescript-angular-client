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

/**
 * Describe a filter on a product's column
 */
export interface ReportProductFilter {
    /**
     * The column identifier of your catalog or a custom column.
     */
    "columnId": string;
    "operatorName": models.ReportProductFilterOperatorName;
    /**
     * Must be null if the operator is \"IsNull\" or \"IsNotNull\". Can contains multiple value in case of \"InList\" operator. Otherwise a single value is expected.
     */
    "values"?: Array<string>;
}

