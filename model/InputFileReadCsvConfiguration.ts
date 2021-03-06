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

/**
 * The CSV file description
 */
export interface InputFileReadCsvConfiguration {
    /**
     * Indicate if the csv file contains the column name at the first row
     */
    "hasHeaderRecord": boolean;
    /**
     * Indicate if the importation should not use the csv column name from the file
     */
    "ignoreHeaderRecord": boolean;
    /**
     * Indicate the separator of the values in the CSV file. Generally \";\"
     */
    "csvSeparator": string;
    /**
     * Indicate the text qualifier of the CSV file. Generally the value is \"
     */
    "csvTextQualifier": string;
}

