import './App.css'
import {Header} from "./components/header/header.tsx";
import {Title} from "./components/title/title.tsx";

function App() {

  return (
    <>
        <Header>
            <Title className="p-4">
                <span className="text-4xl font-bold"> Panel </span>
            </Title>
        </Header>
    </>
  )
}

export default App
