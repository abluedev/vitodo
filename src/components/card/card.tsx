import {ReactNode} from "react";

export const Card = ({ children }: { children: ReactNode }) => {
    return (<div className="p-6 border border-slate-200 rounded-md hover:border-slate-400 hover:cursor-pointer hover:bg-slate-50 flex flex-wrap gap-2">
        { children }
    </div>)
}
