import { useProjetos } from "@/components/context/ProjetosProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";


interface Imagem {
  endereco: string;
  tipo: string;
}

interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  titulo: string;
  categoria: string; // Obrigatório
  imagens: Imagem[];
}

function ProjetosDetalhes() {
  const { id } = useParams(); // Obtém o ID da URL
  const { projetos } = useProjetos(); // Obtém os projetos do contexto
const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);
  const [imagemSelecionada, setImagemSelecionada] = useState<Imagem | null>(null);

  useEffect(() => {
    if (projetos.length > 0 && id) {
      const projetoEncontrado = projetos.find((projeto) => projeto.id === id) || null;
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


  return (
    <>
      {projetoSelecionado ? (
        <section className="p-5 max-w-[1366px] m-auto" >
          <div>
            <h1 className="text-5xl font-medium">{projetoSelecionado.titulo}</h1>
          </div>

          <Card className="p-5 mt-6 flex-col">
            <div className="flex items-center justify-between w-full">
              <h1>Voltar</h1>

              <ul>
                <li>Categoria: {projetoSelecionado.categoria}</li>
              </ul>
            </div>

            <AnimatePresence mode="wait">
                {imagemSelecionada && (
                    <motion.div
                    className="mt-8 flex m-auto justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <motion.img
                        className="max-w-full max-h-[600px] object-contain rounded-lg shadow-lg"
                        src={imagemSelecionada.endereco}
                        alt="Imagem selecionada"
                        key={imagemSelecionada.endereco} // Força reanimação ao trocar a imagem
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    </motion.div>
                )}
                </AnimatePresence>


            <div className="grid grid-cols-3 gap-5 max-w-[1003px] m-auto">
                {projetoSelecionado && 
                    projetoSelecionado.imagens.map((imagem, index) => (
                    <motion.div
                        key={index}
                        className={`cursor-pointer rounded-2xl overflow-hidden ${
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

{/* Imagem Ampliada com Animação */}




          </Card>
        </section>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}

export default ProjetosDetalhes;
