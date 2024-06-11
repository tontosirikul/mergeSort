import { mergeSort } from "../mergeSort";

describe('merge sort', () => {
    it('should merge three sorted arrays into one sorted array', () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [10, 8, 6, 4, 2];
        const collection3 = [11, 12, 13, 14, 15];
        const mergedArray = mergeSort(collection1, collection2, collection3);
        expect(mergedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });

    it('should handle empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];
        const mergedArray = mergeSort(collection1, collection2, collection3);
        expect(mergedArray).toEqual([]);
    });

    it('should handle some empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [5,4,3];
        const collection3: number[] = [];
        const mergedArray = mergeSort(collection1, collection2, collection3);
        expect(mergedArray).toEqual([3,4,5]);
    });

    it('should handle arrays of different lengths', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [10, 8, 6, 4, 2];
        const collection3 = [11, 12, 13, 14, 15];
        const mergedArray = mergeSort(collection1, collection2, collection3);
        expect(mergedArray).toEqual([1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15]);
    });
});
