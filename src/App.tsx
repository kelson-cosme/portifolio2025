import "@/App.css"
import Rotas from "./components/rotas/Rotas"
import { ProjetosProvider } from "./components/context/ProjetosProvider"

function App() {
  return (
    <section className="sm:ml-[18vw]  bg-transparent  ">  
    <ProjetosProvider>
      <Rotas />
    </ProjetosProvider>
     
    </section>

  )
}

export default App
