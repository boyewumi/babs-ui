import type { RefObject } from 'react';

type Ref<T> = ((instance: T | null) => void) | RefObject<T | null> | null;

export function mergeRefs<T>(...refs: Ref<T>[]): (instance: T | null) => void {
  return (instance: T | null) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref != null) {
        (ref as RefObject<T | null>).current = instance;
      }
    });
  };
}
