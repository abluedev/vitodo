import {ColorResult} from 'react-color';
import {createContext, Dispatch, ReactNode, SetStateAction} from "react";

interface ColorContextProps {
    color: ColorResult | string ;
    setColor: Dispatch<SetStateAction<ColorResult | string>> | undefined;
    children: ReactNode
}

export const ColorContext = createContext<Omit<ColorContextProps, 'children'>>({
    color: "rgb(90, 33, 182)",
    setColor: undefined
})

export const ColorProvider = ({ color, setColor, children }: ColorContextProps) => {
    return <ColorContext.Provider value={{ color, setColor}}>
        { children }
    </ColorContext.Provider>
}
