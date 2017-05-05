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

export interface BeezUPCommonErrorSummary {
    "utcDate"?: Date;
    "errorGuid"?: string;
    "errorCode"?: string;
    "errorMessage"?: string;
    "technicalErrorMessage"?: string;
    "exceptionDetail"?: models.BeezUPCommonExceptionDetail;
    "errorArguments"?: { [key: string]: string; };
    "propertyName"?: string;
    "propertyValue"?: string;
    "objectName"?: string;
    "source"?: string;
}
