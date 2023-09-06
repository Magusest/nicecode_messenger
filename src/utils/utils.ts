import { nanoid } from "nanoid";
import { UserDataType } from "../types/userDataType";

 function getRandomElement(arr: UserDataType[]) {
    const randomInt = Math.floor(Math.random() * arr.length);
    return arr[randomInt];
}

function getArray(arr: UserDataType[], lengthArr: number) {
    const array: UserDataType[] = [];

    for (let i = 0; i < lengthArr; i++) {
        const element = getRandomElement(arr);
        element.id = nanoid();
        const clone = {...element}
        array.push(clone);
    }

    return array
}

export {
    getRandomElement,
    getArray,
}