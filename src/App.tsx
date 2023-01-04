import "./globalStyles.css"
import { Header } from "./Header"
import { TodoCreate } from "./TodoCreate"

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <TodoCreate />
      </main>
    </div>
  )
}

export default App
