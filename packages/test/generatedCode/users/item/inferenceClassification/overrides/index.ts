/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue, createInferenceClassificationOverrideFromDiscriminatorValue, serializeInferenceClassificationOverride, type InferenceClassificationOverride, type InferenceClassificationOverrideCollectionResponse } from '../../../../models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
import { InferenceClassificationOverrideItemRequestBuilderRequestsMetadata, type InferenceClassificationOverrideItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/inferenceClassification/overrides
 */
export interface OverridesRequestBuilder extends BaseRequestBuilder<OverridesRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the ApiSdk.users.item.inferenceClassification.overrides.item collection
     * @param inferenceClassificationOverrideId The unique identifier of inferenceClassificationOverride
     * @returns {InferenceClassificationOverrideItemRequestBuilder}
     */
     byInferenceClassificationOverrideId(inferenceClassificationOverrideId: string) : InferenceClassificationOverrideItemRequestBuilder;
    /**
     * Get the overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<InferenceClassificationOverrideCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassification-list-overrides?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<OverridesRequestBuilderGetQueryParameters> | undefined) : Promise<InferenceClassificationOverrideCollectionResponse | undefined>;
    /**
     * Create an override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classifiedas specified in the override. Note
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<InferenceClassificationOverride>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassification-post-overrides?view=graph-rest-1.0|Find more info here}
     */
     post(body: InferenceClassificationOverride, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<InferenceClassificationOverride | undefined>;
    /**
     * Get the overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OverridesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create an override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classifiedas specified in the override. Note
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: InferenceClassificationOverride, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.
 */
export interface OverridesRequestBuilderGetQueryParameters {
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
export const OverridesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/inferenceClassification/overrides{?%24count,%24filter,%24orderby,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OverridesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const OverridesRequestBuilderNavigationMetadata: Record<Exclude<keyof OverridesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byInferenceClassificationOverrideId: {
        requestsMetadata: InferenceClassificationOverrideItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["inferenceClassificationOverride%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OverridesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OverridesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OverridesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: OverridesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createInferenceClassificationOverrideFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeInferenceClassificationOverride,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
