import {StateProps} from "../domain/State.ts";

export const State = ({state}:  {state: StateProps} ) => {
    return <p className="text-violet-800 uppercase">{state}</p>

}
