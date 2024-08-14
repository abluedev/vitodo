import {Column} from "../../../components/board/column/column.tsx";
import {Card} from "../../../components/card/card.tsx";
import {TaskComponent} from "../../Task/ui/task.component.tsx";
import {GetStates, StateProps} from "../../State/domain/State.ts";
import {State} from "../../State/ui/state.component.tsx";
import {GetTasks, Task} from "../../Task/domain/Task.ts";

export const OrganizerComponent = () => {
    return (
        <>
            { GetStates().map( (state: StateProps, index) => {
                return (
                    <Column key={`column-${index}`} className="col-span-12 md:col-span-6 lg:col-span-4 gap-4 flex flex-wrap gap">
                        <State state={state} />
                        { GetTasks().map((task: Task, index: number) => {
                            return state ===  task.state && <Card>
                                <TaskComponent key={`${task.date}-${index}`} {...task}  />
                            </Card>
                            })}
                    </Column>
                )
            })}
        </>
    )
}
