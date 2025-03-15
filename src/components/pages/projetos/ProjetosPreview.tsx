import {
    Card,
  } from "@/components/ui/card"
  
  import { Link } from "react-router";


function ProjetosPreview(){
    return(
        <div className="flex flex-col mt-11">
            <h1 className="text-3xl font-medium mb-4">Projetos</h1>

            <Card className="w-full relative grid grid-cols-1 gap-5 p-6 sm:grid-cols-2" >
                <p className="absolute bottom-0 right-0 p-4 font-medium"><Link to={"/projetos"}>Ver completo</Link> </p>


                <div>
                    <img className="rounded-2xl" src="https://img.freepik.com/vetores-gratis/maquete-do-dispositivo-digital_53876-89370.jpg?t=st=1742009401~exp=1742013001~hmac=3ec010a13c7ffe731f65f94d20533b959aff27c9372cae6000de47c85d9b6fcf&w=996" alt="" />
                    <p className="mt-2 mb-4 font-medium">Nome do projeto</p>
                </div>

                <div>
                    <img  className="rounded-2xl" src="https://img.freepik.com/vetores-gratis/maquete-do-dispositivo-digital_53876-89370.jpg?t=st=1742009401~exp=1742013001~hmac=3ec010a13c7ffe731f65f94d20533b959aff27c9372cae6000de47c85d9b6fcf&w=996" alt="" />
                    <p className="mt-2 mb-4 font-medium">Nome do projeto</p>
                
                </div>
            </Card>

        </div>
    )
}

export default ProjetosPreview