import {Column} from "../../../components/board/column/column.tsx";
import {Card} from "../../../components/card/card.tsx";
import {TaskComponent} from "../../Task/ui/task.component.tsx";
import {GetStates} from "../../State/domain/State.ts";
import {State} from "../../State/ui/state.component.tsx";
import {GetTasks, Task} from "../../Task/domain/Task.ts";

export const OrganizerComponent = () => {
    return (
        <>
            { GetStates().map( (stateColumn, index) => {
                return (
                    <Column key={`column-${index}`} className="col-span-12 md:col-span-6 lg:col-span-4 gap-4 flex flex-wrap gap">
                        <State state={stateColumn} />
                        { GetTasks().map(({title, state, date, tags, inCharge}: Task) => {
                            return stateColumn ===  state && <Card>
                                <TaskComponent key={`${date}`} state={state} title={title} tags={tags} date={date} inCharge={inCharge} />
                            </Card>
                            })}
                    </Column>
                )
            })}
        </>
    )
}
