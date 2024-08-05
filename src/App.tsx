import {Header} from "./components/header/header.tsx";
import {Title} from "./components/title/title.tsx";
import {Board} from "./components/board/board.tsx";
import {OrganizerComponent} from "./features/Organizer/ui/organizer.component.tsx";
import {TaskPanelComponent} from "./features/Task-panel/ui/task-panel.component.tsx";

function App() {

  return (
    <main className="p-20">
        <TaskPanelComponent title={'Create task panel component'} tags={['Design', 'UI Design', 'Software development']} date={'28/01/1991'} state={'in progress'} inCharge={['Lidia'] }/>
        <Header>
            <Title className="p-4">
                <span className="text-4xl font-bold"> Panel </span>
            </Title>
        </Header>
        <section className="mt-28">
            <Board className="grid grid-cols-12 gap-10">
                <OrganizerComponent></OrganizerComponent>
            </Board>
        </section>
    </main>
  )
}

export default App
