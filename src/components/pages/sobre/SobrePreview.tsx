import { Card } from "@/components/ui/card";
import { Book, GraduationCap, LaptopMinimalCheck, StickyNote } from "lucide-react";
import { Link } from "react-router";
import Magnet from '@/ui/Magnet/Magnet'


function SobrePreview() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-3xl font-medium mb-4">Sobre mim</h1>

      <Card className="w-full grid grid-cols-1 gap-9 p-6 relative sm:grid-cols-2">
        {/* Cruz no meio */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="sm:absolute h-0 w-px sm:h-[90%] bg-gray-100"></div> {/* Linha vertical */}
          <div className="sm:absolute w-0 h-px sm:w-[90%] bg-gray-100"></div> {/* Linha horizontal */}
        </div>

        <Link className="absolute bottom-0 right-0 p-4 font-medium  z-50" to={"/sobre"}><p className="">Ver completo </p></Link>

        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <div className="border-b sm:border-b-0 border-gray-200 pb-4">
            <GraduationCap />
            <h2 className="mt-3 font-bold">Educação Acadêmica</h2>
            <ul className="list-disc ml-5 text-gray-500 font-medium" >
            <li className="mt-3 mb-3">Universidade Anhanguera Educacional</li>
            </ul>
            <p className="text-gray-500 font-medium">2023 - 2024</p>
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
          <li className="mt-3 mb-3">Altama Industrial</li>
          </ul>
          <p className="text-gray-500 font-medium">2025 - Atualmente</p>
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
  );
}

export default SobrePreview;
