import {ComponentProps} from "../types.ts";


export const Header = ({ className = "", children }: ComponentProps) => {
    return <header className={className}> { children } </header>
}
