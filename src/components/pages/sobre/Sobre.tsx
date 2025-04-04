import { Card } from "@/components/ui/card";
import { Book, GraduationCap, LaptopMinimalCheck, StickyNote } from "lucide-react";
import Magnet from '@/ui/Magnet/Magnet'
import Footer from "@/components/footer/Footer";
import { motion } from "framer-motion";

function Sobre() {
  return (
    <section className="p-5 max-w-[1366px] m-auto">
      <div className="flex flex-col">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-medium"
          >
            Sobre mim
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4"
          >
            Minha jornada foi construída com uma sólida formação em Engenharia da Computação (UNIC) e especialização em Desenvolvimento Front-End (Anhanguera), aliada a experiência prática em suporte técnico em empresas como Infrawise e Agion Tecnologia.
            </motion.p>

          <Card className="mt-6 w-full grid grid-cols-1 gap-9 p-6 relative sm:grid-cols-2">


            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <div className="border-b sm:border-b-0 border-gray-200 pb-4 "  >
                <GraduationCap />
                <h2 className="mt-3 font-bold">Educação Acadêmica</h2>
                <ul className="list-disc ml-5 text-gray-500 font-medium" >
                  <li className="mt-3 mb-3">Universidade Anhanguera Educacional - Desenvolvimento Front-End</li>
                </ul>
                <p className="text-gray-500 font-medium">2023 - 2024</p>
              </div>

              <div className="border-b sm:border-b-0 border-gray-200 pb-4  "  >
                <ul className="list-disc ml-5 text-gray-500 font-medium" >
                  <li className="mt-3 mb-3">Unic - Universidade de Cuiabá - Engenharia da Computação</li>
                </ul>
                <p className="text-gray-500 font-medium">2018 - 2023</p>
              </div>
            </Magnet>

            <Magnet padding={50} disabled={false} magnetStrength={10}>
            <div className="border-b sm:border-b-0 border-gray-200 pb-4">
              <Book />
              <h2 className="mt-3 font-bold">Educação não formal</h2>
              <ul className="list-disc ml-5 text-gray-500 font-medium" >
              <li className="mt-3 mb-3">Curso Desenvolvimento Web - Programador Br</li>
              </ul>
              <p className="text-gray-500 font-medium">2020</p>
            </div>        
            </Magnet>

            <Magnet padding={50} disabled={false} magnetStrength={10}>
            <div className="border-b sm:border-b-0 border-gray-200 pb-4">
              <LaptopMinimalCheck />
              <h2 className="mt-3  font-bold"> Experiência</h2>
              <ul className="list-disc ml-5 text-gray-500 font-medium" >
              <li className="mt-3 mb-3">Altama Industrial - Analista de TI</li>
              </ul>
              <p className="text-gray-500 font-medium">2025 - Atualmente</p>
            </div>

            <div className="border-b sm:border-b-0 border-gray-200 pb-4">
              <ul className="list-disc ml-5 text-gray-500 font-medium" >
              <li className="mt-3 mb-3">INFRA|WISE - Especialista em suporte de TI</li>
              </ul>
              <p className="text-gray-500 font-medium">2023 - 2025</p>
            </div>

            <div className="border-b sm:border-b-0 border-gray-200 pb-4">
              <ul className="list-disc ml-5 text-gray-500 font-medium" >
              <li className="mt-3 mb-3">Agion Tecnologia - Técnico de suporte em TI</li>
              </ul>
              <p className="text-gray-500 font-medium">2021 - 2023</p>
            </div>
            </Magnet>

            <Magnet padding={50} disabled={false} magnetStrength={10}>
            <div className="pb-4">
              <StickyNote />
              <h2 className="mt-3 font-bold">Certificações</h2>
              <ul className="list-disc ml-5 text-gray-500 font-medium" >
              <li className="mt-3 mb-3 ">Certificado de autoridade: JavaScript</li>
              </ul>
              <p className="text-gray-500 font-medium">2024 - 2024</p>
            </div>
            </Magnet>

          </Card>
        </div>    

        <Footer />

      </section>
  );
}

export default Sobre