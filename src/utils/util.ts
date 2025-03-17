export const combineArrays = <T>(newItems: T[], oldItems?: T[]): T[] => {
  return [...newItems, ...(oldItems ?? [])]
}
