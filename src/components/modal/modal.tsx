import {ComponentProps} from "../types.ts";
import {useContext} from "react";
import {ModalContext} from "../provider/modal.context.tsx";

export const Modal = ({children}: Pick<ComponentProps,'children'>) => {

    const { show } = useContext(ModalContext)
    return (<>{
        show && <div className="flex bg-gray-900 bg-opacity-80 fixed inset-0 p-8 items-center justify-center">
        {children}
    </div>
}</>)
}
