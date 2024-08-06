import {Modal} from "../../../components/modal/modal.tsx";
import {Task} from "../../Task/domain/Task.ts";
import {FaTable} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {addTask} from "../../Task/infrastructure/command-task.ts";
import {AiFillCloseCircle} from "react-icons/ai";
import {ModalContext} from "../../../components/provider/modal.context.tsx";
import {useContext} from "react";


export const TaskPanelComponent = ({ title, state, tags, inCharge }: Task) => {

    const { setShow } = useContext(ModalContext)

    const { register, handleSubmit} = useForm<Task>()
    const { mutate} = useMutation({
        mutationFn: (task: Task) => addTask(task),
    })

    const handleFormSubmit = (task: Task) => {
        mutate(task)
    }

    return (<Modal>
        <form className="p-8 border-2 rounded-sm bg-white w-4/5 flex flex-col" onSubmit={handleSubmit(handleFormSubmit)}>
            <AiFillCloseCircle className="ml-auto" size={24} onClick={() => setShow && setShow(false)}/>
            <div className="p-2">
                <div className="w-full flex gap-2 items-center">
                    <FaTable/>
                    <input defaultValue={title} {...register("title")} className="p-2 w-full text-2xl font-semibold "/>
                </div>
                <small className="text-xs w-full"> State: <span className="uppercase underline">{state} </span></small>
            <div className="flex gap-2 mt-2">
                { tags.map( (tag, index) => <p key={`${tag}-${index}`} className="text-sm rounded-md bg-violet-100 p-2 text-violet-400 mb-2"> {tag}</p>)}
            </div>
            <div>
                <p> Description </p>
                <textarea defaultValue={"Lorem ipsum"} />
            </div>
                <div className="flex items-center gap-2">
                    <FaPeopleGroup/> <p className="w-full"> Team </p>
                </div>
                {inCharge.map((person, index) => <span key={`${person}-${index}`}>{person}</span>)}
            </div>
            <button className="p-2 bg-violet-100 w-24 text-violet-500 font-bold rounded-sm"> Save </button>
        </form>
    </Modal>)
}
