import {Card} from "../../components/card/card.tsx";

export default  {
    component: Card,
    title: "TaskCard",
    tags: ['autodocs'],

};

export const Story = {
    args: {
            children: <h1> Hola mundo </h1>
    }
}
