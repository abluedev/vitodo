import {Header} from "./components/header/header.tsx";
import {Title} from "./components/title/title.tsx";
import {Board} from "./components/board/board.tsx";
import {OrganizerComponent} from "./features/Organizer/ui/organizer.component.tsx";
import {TaskPanelComponent} from "./features/Task-panel/ui/task-panel.component.tsx";
import {Modal, ModalProvider} from "./components/provider/modal.context.tsx";
import {useState} from "react";
import {ConfigurationPanelComponent} from "./features/Configuration-panel/ui/configuration-panel.component.tsx";
import {ColorProvider} from "./components/provider/color.context.tsx";
import {ColorResult} from "react-color";


function App() {

    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ typeModal, setTypeModal ] = useState<Modal>('');
    const [ color, setColor ] = useState<ColorResult | string>("rgb(90, 33, 182)")

  return (
      <ColorProvider color={color} setColor={setColor}>
      <ModalProvider show={showModal} setShow={setShowModal} setModal={setTypeModal} modal={typeModal}>
      <main className="p-20 flex flex-col">
          <ConfigurationPanelComponent />
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
      </ModalProvider>
      </ColorProvider>
  )
}

export default App
