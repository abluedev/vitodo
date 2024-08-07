import {States} from "../domain/State.ts";

export const State = (state:  States ) => {
    return <p className={`${state.configuration.color}`}>{state.stateName}</p>

}
