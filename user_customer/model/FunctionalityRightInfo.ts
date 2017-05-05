/**
 * Customer
 * This API will gives you the ability to : - manage your account - manage your stores - shares your stores with your friends - manage your contracts - access to your invoices 
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
 * Describe the rights for a functionality
 */
export interface FunctionalityRightInfo {
    /**
     * The functionality code
     */
    "functionalityCode": string;
    /**
     * The max value for this functionality code considering your rights
     */
    "maxValueInterger"?: number;
    /**
     * If you can use this functionality unlimitedly
     */
    "unlimited"?: boolean;
}
