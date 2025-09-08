import {
    Card,
  } from "@/components/ui/card"
  
  import { Link  } from "react-router";

  import TiltedCard from "@/ui/TiltedCard/TiltedCard"

  import Kemax from "../../../../public/Kemax/principal.webp"
  import MemoriaDoAmor from "../../../../public/MemoriasDoAmor/principal.webp"
  import ControleClientes from "../../../../public/ControleCliente/principal.webp"



function ProjetosPreview(){

    return(
        <div className="flex flex-col mt-11 p-5">
            <h1 className="text-3xl font-medium mb-4">Projetos</h1>

            <Card className="w-full relative grid grid-cols-1 gap-5 p-6 pb-15 sm:grid-cols-3" >
                <p className="absolute bottom-0 right-0 p-4 font-medium"><Link to={"/projetos"}>Ver completo</Link> </p>
                
                <Link to={"/projetos/TBOkyadtZXYiKdf2d1oW"}>
                    <TiltedCard
                        imageSrc={Kemax}
                        altText=""
                        captionText="Landing Page"
                        containerHeight="300px"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={15}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text bg-[black] p-2 rounded-2xl m-5 text-white">
                                Kemax - Agência de Sites
                            </p>
                        }   
                    />
                </Link>
                
                <Link to={"/projetos/VoBujUxIRgqj1gxEmUWl"}>
                    <TiltedCard
                        imageSrc={MemoriaDoAmor}
                        altText="Memorias Do Amor"
                        captionText="MicroSaaS"
                        containerHeight="300px"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={15}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text bg-[black] p-2 rounded-2xl m-5 text-white">
                                Memórias do Amor
                            </p>
                        }   
                        />
                </Link>

                <Link to={"/projetos/jh3R60cpzMAmMxi3Tss1"}>
                    <TiltedCard
                        imageSrc={ControleClientes}
                        altText="Sistema"
                        captionText="Sistema"
                        containerHeight="300px"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={15}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text bg-[black] p-2 rounded-2xl m-5 text-white">
                                Gerenciador de Clientes
                            </p>
                        }   
                    />
                </Link>
            </Card>

        </div>
    )
}

export default ProjetosPreview