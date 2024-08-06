import {Task} from "../domain/Task.ts";
import {useContext} from "react";
import {ModalContext} from "../../../components/provider/modal.context.tsx";

export const TaskComponent = ( {state = 'to develop', title, date, tags, inCharge }: Task) => {
    const { setShow } = useContext(ModalContext)

    return (
        <div className="flex flex-wrap gap-2" onClick={() => setShow && setShow(true)}>
            <div className="flex w-full items-center" data-testid={state}>
                <p className="text-xl font-semibold">{title} </p>
                <p className="text-xs ml-auto text-slate-300"> {date}</p>
            </div>
            {tags.map((tag, index) => <p key={`tag-${index}`} className="text-sm rounded-md bg-violet-100 p-2 text-violet-400 mb-2"> {tag}</p>)}
            <div className="flex gap-6 flex-wrap w-full">
                {inCharge.map((charge, index) => <p key={`charge-${index}`}> {charge}</p>)}
            </div>
        </div>
    )
}
