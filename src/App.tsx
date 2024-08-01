import './App.css'
import {Header} from "./components/header/header.tsx";
import {Title} from "./components/title/title.tsx";
import {TaskCard} from "./components/task-card/task-card.tsx";

function App() {

  return (
    <main className="p-20">
        <Header>
            <Title className="p-4">
                <span className="text-4xl font-bold"> Panel </span>
            </Title>
        </Header>
        <section className="mt-28">
            <TaskCard title="Create task card" resume="Create an example of Task Card component" tags={['Software Design','Feature', 'Component']} date={new Date().toDateString()} inCharge={['Lidia']}/>

        </section>
    </main>
  )
}

export default App
