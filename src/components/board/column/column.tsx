import {ComponentProps} from "../../types.ts";

export const Column = ({ className, children}: ComponentProps) => {
    return (<section className={ className }>
        { children }
            </section>)
}
