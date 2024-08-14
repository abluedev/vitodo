export type StateProps = 'backlog' | 'to develop' | 'in progress' | 'blocked' |'done'

export const GetStates = (): StateProps[] => {
    return  [ 'backlog', 'to develop', 'in progress', 'blocked', 'done']
}
