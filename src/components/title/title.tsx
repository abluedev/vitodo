import {ComponentProps} from "../types.ts";

export const Title = ({ className = "", children }: ComponentProps) => {
    return (<p className={className}> { children }</p>)
}
