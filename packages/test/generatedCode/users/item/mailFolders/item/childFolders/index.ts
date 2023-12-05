// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { type MailFolderCollectionResponse } from '../../../../../models/';
import { createMailFolderFromDiscriminatorValue, deserializeIntoMailFolder, serializeMailFolder, type MailFolder } from '../../../../../models/mailFolder';
import { createMailFolderCollectionResponseFromDiscriminatorValue } from '../../../../../models/mailFolderCollectionResponse';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/';
import { MailFolderItemRequestBuilder } from './item/';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ChildFoldersRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Include Hidden Folders
     */
    includeHiddenFolders?: string;
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
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders
 */
export class ChildFoldersRequestBuilder extends BaseRequestBuilder<ChildFoldersRequestBuilder> {
    /**
     * The Count property
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.childFolders.item collection
     * @param mailFolderId1 The unique identifier of mailFolder
     * @returns a MailFolderItemRequestBuilder
     */
    public byMailFolderId1(mailFolderId1: string) : MailFolderItemRequestBuilder {
        if(!mailFolderId1) throw new Error("mailFolderId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mailFolder%2Did1"] = mailFolderId1
        return new MailFolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    /**
     * Instantiates a new ChildFoldersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders{?includeHiddenFolders,%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}", (x, y) => new ChildFoldersRequestBuilder(x, y));
    }
    /**
     * The collection of child folders in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolderCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-list-childfolders?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RequestConfiguration<ChildFoldersRequestBuilderGetQueryParameters> | undefined) : Promise<MailFolderCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MailFolderCollectionResponse>(requestInfo, createMailFolderCollectionResponseFromDiscriminatorValue, errorMapping);
    }
    /**
     * Create a new mailSearchFolder in the specified user's mailbox. This API is available in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolder
     * @see {@link https://learn.microsoft.com/graph/api/mailsearchfolder-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MailFolder | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MailFolder>(requestInfo, createMailFolderFromDiscriminatorValue, errorMapping);
    }
    /**
     * The collection of child folders in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RequestConfiguration<ChildFoldersRequestBuilderGetQueryParameters> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation(HttpMethod.GET, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration, childFoldersRequestBuilderGetQueryParametersMapper);
        requestInfo.headers.tryAdd("Accept", "application/json");
        return requestInfo;
    }
    /**
     * Create a new mailSearchFolder in the specified user's mailbox. This API is available in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation(HttpMethod.POST, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        requestInfo.headers.tryAdd("Accept", "application/json");
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMailFolder);
        return requestInfo;
    }
}
const childFoldersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
// tslint:enable
// eslint-enable
