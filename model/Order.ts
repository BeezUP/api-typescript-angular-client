/**
 * BeezUP API
 * # The REST API of BeezUP system ## Overview The REST APIs provide programmatic access to read and write BeezUP data.  Basically, with this API you will be able to do everything like you were with your browser on https://go.beezup.com !  The main features are: - Register and manage your account - Create and manage and share your stores with your friends/co-workers. - Import your product catalog and schedule the auto importation - Search the channels your want to use - Configure your channels for your catalogs to export your product information:     - cost and general settings     - category and columns mappings     - your will be able to create and manage your custom column     - put in place exlusion filters based on simple conditions on your product data     - override product values     - get product vision for a channel catalog scope - Analyze and optimize your performance of your catalogs on all yours channels with different type of reportings by day, channel, category and by product. - Automatize your optimisation by using rules! - And of course... Manage your orders harvested from all your marketplaces:     - Synchronize your orders in an uniformized way     - Get the available actions and update the order status - ...and more!  ## Authentication credentials The public API with the base path **_/v2/public** have been put in place to give you an entry point to our system for the user registration, login and lost password. The public API does not require any credentials. We give you the some public list of values and public channels for our public commercial web site [www.beezup.com](http://www.beezup.com).  The user API with the base path **_/v2/user** requires a token which is available on this page: https://go.beezup.com/Account/MyAccount  ## Things to keep in mind ### API Rate Limits - The BeezUP REST API is limited to 100 calls/minute.  ### Media type The default media type for requests and responses is application/json. Where noted, some operations support other content types. If no additional content type is mentioned for a specific operation, then the media type is application/json.  ### Required content type The required and default encoding for the request and responses is UTF8.  ### Required date time format All our date time are formatted in ISO 8601 format: 2014-06-24T16:25:00Z.  ### Base URL The Base URL of the BeezUP API Order Management REST API conforms to the following template.  https://api.beezup.com  All URLs returned by the BeezUP API are relative to this base URL, and all requests to the REST API must use this base URL template.  You can test our API on https://api-docs.beezup.com/swagger-ui\\ You can contact us on [gitter, #BeezUP/API](https://gitter.im/beezUP/API) 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@beezup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Order {
    "marketplaceTechnicalCode": models.BeezUPCommonMarketplaceTechnicalCode;
    "accountId": models.AccountId;
    "beezUPOrderId": models.BeezUPOrderId;
    "beezUPOrderUrl"?: models.BeezUPCommonHttpUrl;
    "marketplaceBusinessCode": models.BeezUPCommonMarketplaceBusinessCode;
    "orderMarketplaceOrderId": models.MarketplaceOrderId;
    "orderStatusBeezUPOrderStatus": models.BeezUPOrderStatus;
    "orderStatusMarketplaceOrderStatus"?: models.MarketplaceOrderStatus;
    "orderMerchantOrderId"?: models.OrderMerchantOrderId;
    "orderMerchantECommerceSoftwareName"?: models.OrderMerchantECommerceSoftwareName;
    "orderMerchantECommerceSoftwareVersion"?: models.OrderMerchantECommerceSoftwareVersion;
    /**
     * The purchase date of this order
     */
    "orderPurchaseUtcDate": Date;
    /**
     * The last modification UTC date done by BeezUP of this order
     */
    "orderLastModificationUtcDate": Date;
    /**
     * The last modification UTC date done by the marketplace on this order
     */
    "orderMarketplaceLastModificationUtcDate": Date;
    "orderBuyerName"?: models.OrderBuyerName;
    /**
     * The total price of this order (corresponding to the amount paid by the customer)
     */
    "orderTotalPrice"?: number;
    "orderCurrencyCode"?: models.BeezUPCommonCurrencyCode;
    "processing": models.Processing;
    "etag": models.Etag;
    "links": models.OrderLinks;
    /**
     * Useful to identify the origin of the order. For example in Amazon.
     */
    "orderMarketPlaceChannel"?: string;
    /**
     * The total tax of this order
     */
    "orderTotalTax"?: number;
    /**
     * The total commission of this order
     */
    "orderTotalCommission"?: number;
    /**
     * The payment method of this order
     */
    "orderPaymentMethod"?: string;
    /**
     * The UTC date of the payment of this order
     */
    "orderPayingUtcDate"?: Date;
    /**
     * The comment associated to this order
     */
    "orderComment"?: string;
    /**
     * The civility of the person in the shipping address for this order
     */
    "orderShippingCivility"?: string;
    /**
     * The company name of the shipping address for this order
     */
    "orderShippingCompanyName"?: string;
    /**
     * The name of the person in the shipping address for this order
     */
    "orderShippingAddressName"?: string;
    /**
     * The email of the person in the shipping address for this order
     */
    "orderShippingEmail"?: string;
    /**
     * The shipping address line 1 of this order
     */
    "orderShippingAddressLine1"?: string;
    /**
     * The shipping address line 2 of this order
     */
    "orderShippingAddressLine2"?: string;
    /**
     * The shipping address line 3 of this order
     */
    "orderShippingAddressLine3"?: string;
    /**
     * The shipping address postal code of this order
     */
    "orderShippingAddressPostalCode"?: string;
    /**
     * The shipping address city of this order
     */
    "orderShippingAddressCity"?: string;
    /**
     * The shipping address state or region of this order
     */
    "orderShippingAddressStateOrRegion"?: string;
    /**
     * The shipping address country name
     */
    "orderShippingAddressCountryName"?: string;
    /**
     * The shipping address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
     */
    "orderShippingAddressCountryIsoCodeAlpha2"?: string;
    /**
     * The phone number of the person in the shipping address for this order
     */
    "orderShippingPhone"?: string;
    /**
     * The mobile phone number of the person in the shipping address for this order
     */
    "orderShippingMobilePhone"?: string;
    /**
     * The shipping price of this order
     */
    "orderShippingPrice"?: number;
    /**
     * The shipping method of this order
     */
    "orderShippingMethod"?: string;
    /**
     * The shipping tax for this order
     */
    "orderShippingShippingTax"?: number;
    /**
     * The UTC date of the earliest ship for this order
     */
    "orderShippingEarliestShipUtcDate"?: Date;
    /**
     * The UTC date of the latest ship for this order
     */
    "orderShippingLatestShipUtcDate"?: Date;
    /**
     * The buyer identifier for this order
     */
    "orderBuyerIdentifier"?: string;
    /**
     * The buyer civility for this order
     */
    "orderBuyerCivility"?: string;
    /**
     * The buyer company name for this order
     */
    "orderBuyerCompanyName"?: string;
    /**
     * The email of the buyer for this order
     */
    "orderBuyerEmail"?: string;
    /**
     * The Buyer address line 1 of this order
     */
    "orderBuyerAddressLine1"?: string;
    /**
     * The Buyer address line 2 of this order
     */
    "orderBuyerAddressLine2"?: string;
    /**
     * The Buyer address line 3 of this order
     */
    "orderBuyerAddressLine3"?: string;
    /**
     * The Buyer address postal code of this order
     */
    "orderBuyerAddressPostalCode"?: string;
    /**
     * The Buyer address city of this order
     */
    "orderBuyerAddressCity"?: string;
    /**
     * The Buyer address state or region of this order
     */
    "orderBuyerAddressStateOrRegion"?: string;
    /**
     * The Buyer address country name
     */
    "orderBuyerAddressCountryName"?: string;
    /**
     * The Buyer address country iso code alpha 2 (see http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#/decoding_table for more details)
     */
    "orderBuyerAddressCountryIsoCodeAlpha2"?: string;
    /**
     * The phone number of the buyer for this order
     */
    "orderBuyerPhone"?: string;
    /**
     * The mobile phone number of the buyer for this order
     */
    "orderBuyerMobilePhone"?: string;
    /**
     * Technical information: The url to the source of this order. We received this information from the marketplace. 
     */
    "orderOrderSourceUri"?: string;
    /**
     * Technical information: The url to the source of this order items. We received this information from the marketplace. 
     */
    "orderOrderItemsSourceUri"?: string;
    "orderItems": Array<models.OrderItem>;
    "transitionLinks": models.OrderTransitionLinks;
}

