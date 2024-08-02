import {StateProps} from "../domain/State.ts";

export const State = ({state}: { state: StateProps }) => {
    return <p className="uppercase">{state}</p>

}
