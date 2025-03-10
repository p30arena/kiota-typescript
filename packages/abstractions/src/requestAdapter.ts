import type { DateOnly } from "./dateOnly";
import type { Duration } from "./duration";
import { type RequestInformation } from "./requestInformation";
import type {
  Parsable,
  ParsableFactory,
  SerializationWriterFactory,
} from "./serialization";
import { type BackingStoreFactory } from "./store";
import type { TimeOnly } from "./timeOnly";

/** Service responsible for translating abstract Request Info into concrete native HTTP requests. */
export interface RequestAdapter {
  /**
   * Gets the serialization writer factory currently in use for the HTTP core service.
   * @return the serialization writer factory currently in use for the HTTP core service.
   */
  getSerializationWriterFactory(): SerializationWriterFactory;
  /**
   * Executes the HTTP request specified by the given RequestInformation and returns the deserialized response model.
   * @param requestInfo the request info to execute.
   * @param errorMappings the error factories mapping to use in case of a failed request.
   * @param type the class of the response model to deserialize the response into.
   * @typeParam ModelType the type of the response model to deserialize the response into.
   * @return a {@link Promise} with the deserialized response model.
   */
  sendAsync<ModelType extends Parsable>(
    requestInfo: RequestInformation,
    type: ParsableFactory<ModelType>,
    errorMappings: ErrorMappings | undefined,
  ): Promise<ModelType | undefined>;
  /**
   * Executes the HTTP request specified by the given RequestInformation and returns the deserialized response model collection.
   * @param requestInfo the request info to execute.
   * @param errorMappings the error factories mapping to use in case of a failed request.
   * @param type the class of the response model to deserialize the response into.
   * @typeParam ModelType the type of the response model to deserialize the response into.
   * @return a {@link Promise} with the deserialized response model collection.
   */
  sendCollectionAsync<ModelType extends Parsable>(
    requestInfo: RequestInformation,
    type: ParsableFactory<ModelType>,
    errorMappings: ErrorMappings | undefined,
  ): Promise<ModelType[] | undefined>;
  /**
   * Executes the HTTP request specified by the given RequestInformation and returns the deserialized response model collection.
   * @param requestInfo the request info to execute.
   * @param responseType the class of the response model to deserialize the response into.
   * @param errorMappings the error factories mapping to use in case of a failed request.
   * @param type the class of the response model to deserialize the response into.
   * @typeParam ResponseType the type of the response model to deserialize the response into.
   * @return a {@link Promise} with the deserialized response model collection.
   */
  sendCollectionOfPrimitiveAsync<
    ResponseType extends Exclude<
      PrimitiveTypesForDeserializationType,
      ArrayBuffer
    >,
  >(
    requestInfo: RequestInformation,
    responseType: Exclude<PrimitiveTypesForDeserialization, "ArrayBuffer">,
    errorMappings: ErrorMappings | undefined,
  ): Promise<ResponseType[] | undefined>;
  /**
   * Executes the HTTP request specified by the given RequestInformation and returns the deserialized primitive response model.
   * @param requestInfo the request info to execute.
   * @param errorMappings the error factories mapping to use in case of a failed request.
   * @param responseType the class of the response model to deserialize the response into.
   * @typeParam ResponseType the type of the response model to deserialize the response into.
   * @return a {@link Promise} with the deserialized primitive response model.
   */
  sendPrimitiveAsync<ResponseType extends PrimitiveTypesForDeserializationType>(
    requestInfo: RequestInformation,
    responseType: PrimitiveTypesForDeserialization,
    errorMappings: ErrorMappings | undefined,
  ): Promise<ResponseType | undefined>;
  /**
   * Executes the HTTP request specified by the given RequestInformation and returns the deserialized primitive response model.
   * @param requestInfo the request info to execute.
   * @param errorMappings the error factories mapping to use in case of a failed request.
   * @return a {@link Promise} of void.
   */
  sendNoResponseContentAsync(
    requestInfo: RequestInformation,
    errorMappings: ErrorMappings | undefined,
  ): Promise<void>;
  /**
   * Enables the backing store proxies for the SerializationWriters and ParseNodes in use.
   * @param backingStoreFactory the backing store factory to use.
   */
  enableBackingStore(
    backingStoreFactory?: BackingStoreFactory | undefined,
  ): void;
  /** The base url for every request. */
  baseUrl: string;
  /**
   * Converts the given RequestInformation into a native HTTP request used by the implementing adapter.
   * @param requestInfo the request info to convert.
   * @typeParam T the type of the native request.
   * @return a {@link Promise} with the native request.
   */
  convertToNativeRequestAsync<T>(requestInfo: RequestInformation): Promise<T>;
}
export interface ErrorMappings {
  _4XX?: ParsableFactory<Parsable>;
  _5XX?: ParsableFactory<Parsable>;
  XXX?: ParsableFactory<Parsable>;
  [key: number]: ParsableFactory<Parsable>;
}

export type PrimitiveTypesForDeserializationType =
  | string
  | number
  | boolean
  | Date
  | DateOnly
  | TimeOnly
  | Duration
  | ArrayBuffer;

export type PrimitiveTypesForDeserialization =
  | "string"
  | "number"
  | "boolean"
  | "Date"
  | "DateOnly"
  | "TimeOnly"
  | "Duration"
  | "ArrayBuffer";
