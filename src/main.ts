import { mergeSort } from "./mergeSort";

function demo() {
    const collection1 = [1, 3, 5];
    const collection2 = [10, 8, 6, 4, 2];
    const collection3 = [11, 12, 13, 14, 15];
    
    console.log("Collection 1:", collection1);
    console.log("Collection 2:", collection2);
    console.log("Collection 3:", collection3);

    const mergedArray = mergeSort(collection1, collection2, collection3);
    console.log("Merged and Sorted Array:", mergedArray);
}

demo();
