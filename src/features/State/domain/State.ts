export type StateProps = 'backlog' | 'to develop' | 'in progress' | 'blocked' |'done'

export interface States {
    stateName: StateProps,
    configuration: {
        color: string;
    }
}

export const GetStates = (): States[] => {
    return  [
        {   stateName: 'backlog',
            configuration: {color: 'text-lime-600'}},
        {
            stateName: 'to develop',
            configuration: {color: 'text-emerald-600'}},
        {
            stateName: 'in progress',
            configuration: {color: 'text-cyan-600'}},
        {
            stateName: 'blocked',
            configuration: {color: 'text-violet-600'}},
        {
            stateName: 'done',
            configuration: {color: 'text-fuchsia-600'}}
        ]
}
