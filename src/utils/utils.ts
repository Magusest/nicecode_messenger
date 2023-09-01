import { UserDataType } from "../types/userDataType";

 function getRandomElement(arr: UserDataType[]) {
    const randomEl = Math.floor(Math.random() * arr.length);
    return arr[randomEl];
}

function getArray(arr: UserDataType[], lengthArr: number) {
    const array: UserDataType[] = [];

    for (let i = 0; i < lengthArr; i++) {
        array.push(getRandomElement(arr));
    }

    return array
}

export {
    getRandomElement,
    getArray,
}