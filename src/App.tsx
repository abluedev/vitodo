import './App.css'
import {Header} from "./components/header/header.tsx";
import {Title} from "./components/title/title.tsx";
import {Board} from "./components/board/board.tsx";
import {Organizer} from "./features/Organizer/ui/organizer.tsx";

function App() {

  return (
    <main className="p-20">
        <Header>
            <Title className="p-4">
                <span className="text-4xl font-bold"> Panel </span>
            </Title>
        </Header>
        <section className="mt-28">
            <Board className="grid grid-cols-12 gap-10">
                <Organizer></Organizer>

                {/*<section className="col-span-12 md:col-span-6 lg:col-span-4 gap-2">
                    <p className="uppercase">Todo</p>
                    <Card>
                        <TaskComponent title="Create task card" tags={['Software Design','Feature', 'Component']} date={new Date().toDateString()} inCharge={['Lidia']} />
                    </Card>
                </section>
                <section className="col-span-12 md:col-span-6 lg:col-span-4 gap-2">
                    <p>In progress</p>
                    <Card>
                        <TaskComponent title="Create task card" tags={['Software Design','Feature', 'Component']} date={new Date().toDateString()} inCharge={['Lidia']} />
                    </Card>
                </section>

                <section className="col-span-12 md:col-span-6 lg:col-span-4 gap-2">
                    <p> Done </p>
                    <Card>
                        <TaskComponent title="Create task card" tags={['Software Design','Feature', 'Component']} date={new Date().toDateString()} inCharge={['Lidia']} />
                    </Card>
                   </section>*/}
            </Board>

        </section>
    </main>
  )
}

export default App
