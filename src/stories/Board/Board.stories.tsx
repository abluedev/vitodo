import {Card} from "../../components/card/card.tsx";
import {Board} from "../../components/board/board.tsx";

export default  {
    component: Board,
    title: "Board",
    tags: ['autodocs'],

};

const cards = [
    <Card><h1> Title</h1> <h2> Subtitle </h2> <p> Lorem ipsum</p></Card>,
    <Card><h1> Title</h1> <h2> Subtitle </h2> <p> Lorem ipsum</p></Card>,
    <Card><h1> Title</h1> <h2> Subtitle </h2> <p> Lorem ipsum</p></Card>,
]

export const Story = {
    args: {
        children: cards
    }
}
