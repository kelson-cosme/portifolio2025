import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/firbase/FirebaseConfig";

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
}

interface ProjetosContextType {
  projetos: Projeto[];
}

const ProjetosContext = createContext<ProjetosContextType | undefined>(undefined);

export const ProjetosProvider = ({ children }: { children: React.ReactNode }) => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      const querySnapshot = await getDocs(collection(db, "projetos"));
      const projetosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Projeto[];
      setProjetos(projetosData);
    };

    fetchProjetos();
  }, []);

  return (
    <ProjetosContext.Provider value={{ projetos }}>
      {children}
    </ProjetosContext.Provider>
  );
};

export const useProjetos = () => {
  const context = useContext(ProjetosContext);
  if (!context) {
    throw new Error("useProjetos deve ser usado dentro de um ProjetosProvider");
  }
  return context;
};
