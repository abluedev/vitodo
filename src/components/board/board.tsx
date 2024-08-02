import {ReactNode} from "react";

export const Board = ({children }:{ children: ReactNode}) => {
    return (<div className="grid grid-cols-12 gap-10">
                { children }
            </div>)
}
