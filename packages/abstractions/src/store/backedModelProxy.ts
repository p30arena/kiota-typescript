import { BackingStoreFactorySingleton } from "./backingStoreFactorySingleton";

// A method that creates a ProxyHandler for a generic model T and attaches it to a backing store.
export function createBackedModelProxyHandler<T extends {}>(): ProxyHandler<T> {

  // Each model has a backing store that is created by the BackingStoreFactorySingleton
  const backingStore = BackingStoreFactorySingleton.instance.createBackingStore();

  /**
   * The ProxyHandler for the model.
   */
  const handler: ProxyHandler<T> = {
    get(target, prop, receiver) {
      console.debug(`BackingStore - Getting property '${prop.toString()}' from backing store`);
      if (prop === 'backingStore') {
        return backingStore;
      }
      return backingStore.get(prop.toString());
    },
    set(target, prop, value, receiver) {
      if (prop === 'backingStore') {
        console.warn(`BackingStore - Ignoring attempt to set 'backingStore' property`);
        return true;
      }
      // set the value on the target object as well to allow it to have keys needed for serialization/deserialization
      Reflect.set(target, prop, value, receiver);
      console.debug(`BackingStore - Setting property '${prop.toString()}'`);
      backingStore.set(prop.toString(), value);
      return true;
    },
  };
  return handler;
}