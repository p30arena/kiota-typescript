/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMessageRuleCollectionResponseFromDiscriminatorValue, createMessageRuleFromDiscriminatorValue, serializeMessageRule, type MessageRule, type MessageRuleCollectionResponse } from '../../../../../../../models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
import { MessageRuleItemRequestBuilderRequestsMetadata, type MessageRuleItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules
 */
export interface MessageRulesRequestBuilder extends BaseRequestBuilder<MessageRulesRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.childFolders.item.messageRules.item collection
     * @param messageRuleId The unique identifier of messageRule
     * @returns {MessageRuleItemRequestBuilder}
     */
     byMessageRuleId(messageRuleId: string) : MessageRuleItemRequestBuilder;
    /**
     * Get all the messageRule objects defined for the user's inbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRuleCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-list-messagerules?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MessageRulesRequestBuilderGetQueryParameters> | undefined) : Promise<MessageRuleCollectionResponse | undefined>;
    /**
     * Create a messageRule object by specifying a set of conditions and actions. Outlook carries out those actions if an incoming message in the user's Inbox meets the specified conditions.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-post-messagerules?view=graph-rest-1.0|Find more info here}
     */
     post(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MessageRule | undefined>;
    /**
     * Get all the messageRule objects defined for the user's inbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageRulesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a messageRule object by specifying a set of conditions and actions. Outlook carries out those actions if an incoming message in the user's Inbox meets the specified conditions.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get all the messageRule objects defined for the user's inbox.
 */
export interface MessageRulesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const MessageRulesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messageRules{?%24count,%24filter,%24orderby,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessageRulesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MessageRulesRequestBuilderNavigationMetadata: Record<Exclude<keyof MessageRulesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMessageRuleId: {
        requestsMetadata: MessageRuleItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["messageRule%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageRulesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MessageRulesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageRuleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MessageRulesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: MessageRulesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageRuleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessageRule,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
