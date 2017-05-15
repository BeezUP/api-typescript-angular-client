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

export interface RegisterRequest {
    /**
     * Your email. We refuse disposable email.
     */
    "email": string;
    /**
     * The password you want to use for your new account. \\ The password length must be greater or equals to 6 and lower or equals to 128. \\ The password must contains at least one number and one special character 
     */
    "password": string;
    /**
     * Can be null. Default: en-GB. The culture name you want to use. FYI. \\ The email activation will use this culture. 
     */
    "cultureName"?: string;
    /**
     * The user id of your commercial in BeezUP.
     */
    "commercialOwnerUserId"?: string;
}

