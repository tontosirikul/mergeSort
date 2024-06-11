export function mergeSort(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const mergedArray: number[] = [];
    // initialised pointer from min to max for each
    let i = 0, j = collection2.length - 1, k = 0;

    while (i < collection1.length && j >= 0 && k < collection3.length) {
        const min = Math.min(collection1[i], collection2[j], collection3[k]);

        mergedArray.push(min);

        if (min === collection1[i]) {
            i++;
        } else if (min === collection2[j]) {
            j--;
        } else {
            k++;
        }
    }

    // Add remaining elements from collection1
    while (i < collection1.length) {
        mergedArray.push(collection1[i]);
        i++;
    }

    // Add remaining elements from collection2
    while (j >= 0) {
        mergedArray.push(collection2[j]);
        j--;
    }

    // Add remaining elements from collection3
    while (k < collection3.length) {
        mergedArray.push(collection3[k]);
        k++;
    }

    return mergedArray;
}
