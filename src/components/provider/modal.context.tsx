import {createContext, Dispatch, SetStateAction, ReactNode} from "react";

export type Modal = 'ORGANIZER' | 'CONFIGURATION' | ''

export interface ModalContextProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>> | undefined,
    setModal: Dispatch<SetStateAction<Modal>> | undefined,
    modal: Modal;
}

export const ModalContext = createContext<ModalContextProps>({
    show: false,
    setShow: undefined,
    modal: '',
    setModal: undefined
});

export const ModalProvider = ({show, setShow, setModal, modal, children }: { show: boolean, setShow: Dispatch<SetStateAction<boolean>> | undefined, setModal: Dispatch<SetStateAction<Modal>> | undefined, modal: Modal,  children: ReactNode }) => {

    return  (<ModalContext.Provider value={{
        show,
        setShow,
        setModal,
        modal
    }}>
                {children}
        </ModalContext.Provider>)
}
