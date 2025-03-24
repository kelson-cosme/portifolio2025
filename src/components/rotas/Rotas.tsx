import { BrowserRouter, Routes, Route} from "react-router"
import Home from "../pages/home/Home"
import SideBar from "@/components/sideBar"
import Sobre from "../pages/sobre/Sobre"
import Projetos from "../pages/projetos/Projetos"
import Stack from "../pages/stack/Stack"
import Contato from "../pages/contato/Contato"
import ProjetosDetalhes from "@/components/pages/projetos/ProjetosDetalhes"


function Rotas(){
    return(
        <>
            <BrowserRouter>
                <SideBar />

                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/stack" element={<Stack />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/projetos/:id" element={<ProjetosDetalhes />}></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas