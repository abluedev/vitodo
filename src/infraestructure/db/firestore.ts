import {getFirestore} from "firebase/firestore/lite";
import {app} from "../../setup.ts";

export const db = getFirestore(app);
