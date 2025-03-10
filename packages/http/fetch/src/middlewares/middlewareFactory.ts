/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MiddlewareFactory
 */
import fetch from "node-fetch";

import { CustomFetchHandler } from "./customFetchHandler";
import { HeadersInspectionHandler } from "./headersInspectionHandler";
import type { Middleware } from "./middleware";
import { ParametersNameDecodingHandler } from "./parametersNameDecodingHandler";
import { RedirectHandler } from "./redirectHandler";
import { RetryHandler } from "./retryHandler";
import { UserAgentHandler } from "./userAgentHandler";

/**
 * @class
 * Class containing function(s) related to the middleware pipelines.
 */
export class MiddlewareFactory {
	/**
	 * @public
	 * @static
	 * Returns the default middleware chain an array with the  middleware handlers
	 * @returns an array of the middleware handlers of the default middleware chain
	 */
	public static getDefaultMiddlewareChain(customFetch: (request: string, init: RequestInit) => Promise<Response> = fetch as any): Middleware[] {
		const middlewareArray: Middleware[] = [new RetryHandler(), new RedirectHandler(), new ParametersNameDecodingHandler(), new UserAgentHandler(), new HeadersInspectionHandler(), new CustomFetchHandler(customFetch)];

		return middlewareArray;
	}
}
