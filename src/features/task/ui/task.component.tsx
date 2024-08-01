import {Task} from "../domain/Task.ts";

export const TaskComponent = ( {title, date, tags, inCharge }: Task) => {
    return (
        <>
            <div className="flex w-full items-center">
                <p className="text-xl font-semibold">{title} </p>
                <p className="text-xs ml-auto text-slate-300"> {date}</p>
            </div>
            {tags.map(tag => <p className="text-sm rounded-md bg-violet-100 p-2 text-violet-400 mb-2"> {tag}</p>)}
            <div className="flex gap-6 flex-wrap w-full">
                {inCharge.map((charge, index) => <p key={`charge-${index}`}> {charge}</p>)}
            </div>
        </>
    )
}
