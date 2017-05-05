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

export interface AccountInfo {
    "info"?: models.BeezUPCommonInfoSummaries;
    "links"?: models.AccountInfoLinks;
    "userId"?: models.BeezUPCommonUserId;
    "email"?: models.BeezUPCommonEmail;
    "personalInfo"?: models.PersonalInfo;
    "status"?: models.AccountStatus;
    "companyInfo"?: models.CompanyInfo;
    "profilePictureInfo"?: models.ProfilePictureInfo;
}

