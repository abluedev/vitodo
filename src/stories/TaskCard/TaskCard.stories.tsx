import {TaskCard} from "../../components/task-card/task-card.tsx";

export default  {
    component: TaskCard,
    title: "TaskCard",
    tags: ['autodocs'],

};

export const Story = {
    args: {
            title: "Task Title",
            tags: ["Tag 1", "Tag 2", "Tag 3"],
            date: "2022-01-01",
            inCharge: ["Person 1", "Person 2"]
    }
}
