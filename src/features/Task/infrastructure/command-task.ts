import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../infraestructure/db/firestore.ts";
import {Task} from "../domain/Task.ts";

export const addTask = async (task: Task): Promise<unknown> => {
        try {
                return await addDoc(collection(db, "tasks"), task);
        } catch(error: unknown){
                return Promise.reject(error);
        }
}
