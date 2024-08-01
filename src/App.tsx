import './App.css'
import {Header} from "./components/header/header.tsx";
import {Title} from "./components/title/title.tsx";
import {Card} from "./components/card/card.tsx";
import {TaskComponent} from "./features/task/ui/task.component.tsx";

function App() {

  return (
    <main className="p-20">
        <Header>
            <Title className="p-4">
                <span className="text-4xl font-bold"> Panel </span>
            </Title>
        </Header>
        <section className="mt-28">
            <Card>
                <TaskComponent title="Create task card" tags={['Software Design','Feature', 'Component']} date={new Date().toDateString()} inCharge={['Lidia']} />
            </Card>

        </section>
    </main>
  )
}

export default App
