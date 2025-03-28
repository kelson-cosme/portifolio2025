import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "@/components/pages/home/Home";
import SideBar from "@/components/sideBar";
import Sobre from "@/components/pages/sobre/Sobre";
import Projetos from "@/components/pages/projetos/Projetos";
import Stack from "@/components/pages/stack/Stack";
import Contato from "@/components/pages/contato/Contato";
import ProjetosDetalhes from "@/components/pages/projetos/ProjetosDetalhes";

interface PageAnimationProps {
    children: React.ReactNode;
    // Outras props podem ser adicionadas aqui
  }
// Componente de animação de página
const PageAnimation = ({ children }: PageAnimationProps) => {
    return (
    <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

function Rotas() {
  const location = useLocation();

  return (
    <>
      <SideBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageAnimation>
                <Home />
              </PageAnimation>
            }
          />
          <Route
            path="/sobre"
            element={
              <PageAnimation>
                <Sobre />
              </PageAnimation>
            }
          />
          <Route
            path="/projetos"
            element={
              <PageAnimation>
                <Projetos />
              </PageAnimation>
            }
          />
          <Route
            path="/stack"
            element={
              <PageAnimation>
                <Stack />
              </PageAnimation>
            }
          />
          <Route
            path="/contato"
            element={
              <PageAnimation>
                <Contato />
              </PageAnimation>
            }
          />
          <Route
            path="/projetos/:id"
            element={
              <PageAnimation>
                <ProjetosDetalhes />
              </PageAnimation>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

// Componente wrapper para usar useLocation
function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;