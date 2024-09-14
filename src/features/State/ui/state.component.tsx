import {StateProps} from "../domain/State.ts";
import {useContext, useEffect, useState} from "react";
import {ColorContext} from "../../../components/provider/color.context.tsx";

export const State = ({state}:  {state: StateProps} ) => {

    const { color } = useContext(ColorContext);
    const [ localColor, setLocalColor ] = useState<string>()
    useEffect(() => {
        setLocalColor(color as string);
    }, [color]);

    return <p className="text-violet-800 uppercase" style={{ color: localColor}}>{state}</p>

}
