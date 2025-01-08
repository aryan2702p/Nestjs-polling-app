import { customAlphabet,nanoid } from "nanoid";


export const createPollID = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);

export const createUserID = () => nanoid();
export const createNominationID = () => nanoid();