import {createContext, Dispatch, ReactNode, SetStateAction} from "react";

export const ModalContext = createContext<{
    show: boolean | undefined,
    setShow: Dispatch<SetStateAction<boolean | undefined>> | undefined
}>({
    show: false,
    setShow: undefined
});

export const ModalProvider = ({show, setShow, children }: { show: boolean | undefined, setShow: Dispatch<SetStateAction<boolean | undefined>> | undefined, children: ReactNode }) => {

    return  (<ModalContext.Provider value={{
        show, setShow
    }}>
                {children}
        </ModalContext.Provider>)
}
