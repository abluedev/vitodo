import {ComponentProps} from "../types.ts";
import {useState} from "react";

export const Modal = ({children}: Pick<ComponentProps,'children'>) => {

    const [show, _setShow] = useState(true);

    return (<>{
        show && <div className="flex bg-gray-900 bg-opacity-80 fixed inset-0 p-8 items-center justify-center">
        {children}
    </div>
}</>)
}
