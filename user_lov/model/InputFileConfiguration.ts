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
 * Describe how to get and read a file
 */
export interface InputFileConfiguration {
    /**
     * The file number starting by 1
     */
    "fileNumber": number;
    "fetch": models.InputFileFetchConfiguration;
    "read": models.InputFileReadConfiguration;
}

