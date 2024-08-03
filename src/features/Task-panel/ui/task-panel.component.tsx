import {Modal} from "../../../components/modal/modal.tsx";
import {Task} from "../../Task/domain/Task.ts";
import {FaTable} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6";

export const TaskPanelComponent = ({ title, state, tags, inCharge }: Task) => {
    return (<Modal>
        <form className="p-8 border-2 rounded-sm bg-white w-4/5">
            <div className="p-2">
                <div className="w-full flex gap-2 items-center">
                    <FaTable/>
                    <input defaultValue={title} className="p-2 w-full text-2xl font-semibold "/>
                </div>
                <small className="text-xs w-full"> State: <span className="uppercase underline">{state} </span></small>
            <div className="flex gap-2 mt-2">
                { tags.map( tag => <p className="text-sm rounded-md bg-violet-100 p-2 text-violet-400 mb-2"> {tag}</p>)}
            </div>
            <div>
                <p> Description </p>
                <textarea defaultValue={"Lorem ipsum"} />
            </div>
                <div className="flex items-center gap-2">
                    <FaPeopleGroup/> <p className="w-full"> Team </p>
                </div>
                {inCharge.map(person => <span>{person}</span>)}
            </div>

        </form>
    </Modal>)
}
