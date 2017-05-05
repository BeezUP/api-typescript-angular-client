/**
 * Public - Channels
 * This api allows you to get access to the channels. The main use case is our public commercial web site.
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface LinksGetChannelsLink {
    "docUrl"?: models.BeezUPCommonDocUrl;
    /**
     * The description of the link
     */
    "description"?: string;
    "href"?: models.BeezUPCommonHref;
    "operationId"?: models.BeezUPCommonOperationId;
    "method"?: models.BeezUPCommonHttpMethod;
    "parameters"?: { [key: string]: models.BeezUPCommonLinkParameter3; };
    /**
     * indicates whether the href is templated or not
     */
    "templated"?: boolean;
    "info"?: models.BeezUPCommonInfoSummaries;
}

