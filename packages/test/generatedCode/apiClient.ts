// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { type UsersRequestBuilder, UsersRequestBuilderNavigationMetadata, UsersRequestBuilderUriTemplate } from './users/';
import { apiClientProxifier, enableBackingStoreForSerializationWriterFactory, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, SerializationWriterFactoryRegistry, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter, type RequestMetadata } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ApiClient extends BaseRequestBuilder<ApiClient> {
    /**
     * The users property
     */
    get users(): UsersRequestBuilder;
}
/**
 * Instantiates a new ApiClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function newApiClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<ApiClient>(requestAdapter, pathParameters, ApiClientUriTemplate, ApiClientNavigationMetadata, undefined);
}
export const ApiClientNavigationMetadata: Record<Exclude<keyof ApiClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    "users": {
        uriTemplate: UsersRequestBuilderUriTemplate,
        navigationMetadata: UsersRequestBuilderNavigationMetadata,
    },
};
export const ApiClientUriTemplate = "{+baseurl}";
// tslint:enable
// eslint-enable
