import {StateProps} from "../../State/domain/State.ts";

export interface Task {
    title: string,
    tags: string[],
    date: string,
    state: StateProps,
    inCharge: string[]
}


export const GetTasks = (): Task[] => {
    return [
        {
            title: 'Create task card',
            tags: ['Software Design', 'UI design', 'Feature', 'Component'],
            date: new Date().toDateString(),
            state: 'done',
            inCharge: ['Lidia']
        },
        {
            title: 'Create state columns',
            tags: ['Software Design', 'UI design', 'Feature', 'Component'],
            date: new Date().toDateString(),
            state: 'in progress',
            inCharge: ['Lidia']
        },
        {
            title: 'Create badget ui',
            tags: ['Software Design', 'UI design', 'Feature', 'Component'],
            date: new Date().toDateString(),
            state: 'to develop',
            inCharge: ['Lidia']
        },
        {
            title: 'Create board',
            tags: ['Software Design', 'UI design', 'Feature', 'Component'],
            date: new Date().toDateString(),
            state: 'done',
            inCharge: ['Lidia']
        }
    ]
}
