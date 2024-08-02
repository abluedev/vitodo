import {ComponentProps} from "../types.ts";

export const Board = ({className, children }:ComponentProps) => {
    return (<div className={className}>
                { children }
            </div>)
}
