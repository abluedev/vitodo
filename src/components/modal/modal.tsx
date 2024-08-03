import {ComponentProps} from "../types.ts";

export const Modal = ({children}: Pick<ComponentProps,'children'>) => {
    return (<div className="flex bg-gray-900 bg-opacity-80 fixed inset-0 p-8 items-center justify-center">
                    { children }
            </div>)
}
