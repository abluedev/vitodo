export const TaskCard = ({ title, tags, date, inCharge}: {title: string, tags: string[], date: string, inCharge: string[]}) => {
    return (<div className="p-6 border border-slate-200 rounded-md hover:border-slate-400 hover:cursor-pointer hover:bg-slate-50 flex flex-wrap gap-2 w-96">
        <div className="flex w-full items-center">
            <p className="text-xl font-semibold">{title} </p>
            <p className="text-xs ml-auto text-slate-300"> { date }</p>
        </div>
        { tags.map( tag => <p className="text-sm rounded-md bg-violet-100 p-2 text-violet-400 mb-2"> { tag }</p>)}
        <div className="flex gap-6 flex-wrap w-full">
            { inCharge.map( (charge, index) => <p key={`charge-${index}`}> { charge }</p>)}
        </div>
            </div>)
}
