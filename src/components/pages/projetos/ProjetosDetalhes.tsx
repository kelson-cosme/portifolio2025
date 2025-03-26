import { useProjetos } from "@/components/context/ProjetosProvider";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {  MoveLeft, Eye } from "lucide-react";
import Footer from "@/components/footer/Footer";

interface Imagem {
  endereco: string;
  tipo: string;
}

interface Visao {
  visaoTitulo: string;
  inovacoes: string[]; // ou outra interface mais complexa se necessário
}
interface Tecnologias {
  name: string;
  imagem: string; // ou outra interface mais complexa se necessário
}
interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  titulo: string;
  categoria: string;
  imagens: Imagem[];
  visao: Visao;
  tecnologias: Tecnologias[];
  link: string;
}

function ProjetosDetalhes() {
  const { id } = useParams(); // Obtém o ID da URL
  const { projetos } = useProjetos(); // Obtém os projetos do contexto
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);
  const [imagemSelecionada, setImagemSelecionada] = useState<Imagem | null>(null);

  const navigate = useNavigate();


// Variantes para o efeito cascata
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3 // Delay adicional para garantir que a seção está visível
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

  useEffect(() => {
    if (projetos.length > 0 && id) {
      const projetoEncontrado = projetos.find((projeto) => projeto.id === id) || null;
      console.log(projetoEncontrado?.titulo)
      setProjetoSelecionado(projetoEncontrado);
  
      // Verificação mais segura
      if (projetoEncontrado && 
          Array.isArray(projetoEncontrado.imagens) && 
          projetoEncontrado.imagens.length > 0) {
        setImagemSelecionada(projetoEncontrado.imagens[0]);
      } else {
        setImagemSelecionada(null);
      }
    }
  }, [projetos, id]);

  useEffect(() => {
    window.scrollTo(0, 0); // Garante que a página comece no topo ao carregar
}, []);

  return (
    <>
      {projetoSelecionado ? (
        <section className="p-5 max-w-[1366px] m-auto" >
          <div>
            <h1 className="text-5xl font-medium">{projetoSelecionado.titulo}</h1>
          </div>

          <Card className="p-5 mt-6 flex-col">
            <div className="flex items-center justify-between w-full">
              <button className="cursor-pointer hover:bg-gray-100 rounded-full duration-300 ease-in-out p-5" onClick={() => navigate(-1)}><MoveLeft /></button>
              

              <ul>
                <li>Categoria: {projetoSelecionado.categoria}</li>
              </ul>
            </div>

            
            <AnimatePresence mode="wait">
              <Link className="m-auto" to={projetoSelecionado && projetoSelecionado.link} target="_blank">
              {imagemSelecionada && (
                <motion.div
                  className="flex m-auto justify-center relative group cursor-pointer" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    className="max-w-full max-h-[600px] object-contain rounded-lg shadow-lg transition duration-300 group-hover:brightness-55"
                    src={imagemSelecionada.endereco}
                    alt="Imagem selecionada"
                    key={imagemSelecionada.endereco} // Força reanimação ao trocar a imagem
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                  
                  {/* Ícone do olho */}
                  <Eye
                    className="absolute inset-0 m-auto text-white opacity-0 transition duration-300 group-hover:opacity-100"
                    size={40}
                  />
                </motion.div>
              )}
              </Link>
              
            </AnimatePresence>

            

            <div className="grid grid-cols-3 gap-5 max-w-[1003px] m-auto">
                {projetoSelecionado && 
                    projetoSelecionado.imagens.map((imagem, index) => (
                    <motion.div
                        key={index}
                        className={`cursor-pointer sm:rounded-2xl rounded-[5px] overflow-hidden ${
                        imagemSelecionada?.endereco === imagem.endereco ? 'ring-4 ring-blue-500' : ''
                        }`}
                        onClick={() => setImagemSelecionada(imagem)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <motion.img
                        className="w-full h-full object-cover"
                        src={imagem.endereco}
                        alt={`Imagem ${index + 1}`}
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                        />
                    </motion.div>
                    ))
                }
                </div>

                <h1 className="font-bold text-2xl">Recursos </h1>
                  {projetoSelecionado && projetoSelecionado.visao.visaoTitulo}
                  <ul className="list-disc ml-5">
                    {projetoSelecionado && projetoSelecionado.visao.inovacoes.map((inovacao, index) => (
                      <li key={index}>{inovacao}</li>
                    ))}
                  </ul>

                  <h1 className="font-bold text-2xl">Tecnologias Utilizadas</h1>
                  <motion.ul 
                    className="grid grid-cols-2 gap-5 sm:flex flex-wrap justify-between items-center text-center"
                    variants={container}
                    initial="hidden"
                    whileInView={window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? "show" : "hidden"}
                    viewport={{ once: false, margin: "-50px 0px -50px 0px" }} // Configurações do viewport
                  >
                    {projetoSelecionado && projetoSelecionado.tecnologias.map((e, index) => (
                      <motion.li 
                      className="sm:w-[15%]" 
                      key={index} 
                      variants={item}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <img className="w-[100%]" src={e.imagem} alt={e.name} />
                      <h2 className="font-medium">{e.name}</h2>
                    </motion.li>
                    ))}
                  </motion.ul>

          </Card>
          <Footer />


        </section>
      ) : (
        <h1>Carregando...</h1>
      )}


    </>
  );
}

export default ProjetosDetalhes;
