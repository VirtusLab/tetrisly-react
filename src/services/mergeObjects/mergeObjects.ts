import { TwoPartial } from "@/utility-types/TwoPartial";

function entriesOf<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}

function hasAttribute<
  TObj extends object,
  TAttribute extends string | number | symbol
>(obj: TObj, attribute: TAttribute): obj is TObj & Record<TAttribute, unknown> {
  return attribute in obj;
}

export function mergeObjects<T extends object>(obj1: T, obj2: TwoPartial<T>) {
  const mergedObject = { ...obj1 };
  entriesOf(obj1).forEach(([key, entries]) => {
    if (hasAttribute(obj2, key)) {
      const differentObj = obj2[key];
      if (typeof differentObj === 'string') {
        mergedObject[key] = differentObj;
      } else {
        mergedObject[key] = {
          ...entries,
          ...differentObj,
        };
      }
    }
  });
  const leftProperties = Object.keys(obj2).filter(
    (key) => !Object.keys(obj1).includes(key)
  );
  return {
    ...mergedObject,
    ...Object.fromEntries(
      leftProperties.map((key) => [key, obj2[key as keyof typeof obj2]])
    ),
  };
}
