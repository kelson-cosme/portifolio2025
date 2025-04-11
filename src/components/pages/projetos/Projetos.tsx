import {Card} from "@/components/ui/card"
   
import { useProjetos } from "@/components/context/ProjetosProvider";
import Footer from "@/components/footer/Footer";

import TiltedCard from "@/ui/TiltedCard/TiltedCard"
import { Link } from "react-router-dom";
import { useEffect } from "react";



function Projetos(){

    const { projetos } = useProjetos(); // Obtém os projetos do contexto

    useEffect(() => {
        window.scrollTo(0, 0); // Garante que a página comece no topo ao carregar
    }, []);

    return(
        <section className="p-5 max-w-[1366px] m-auto">
            <h1 className="text-5xl font-medium">Pagina Projetos</h1>
                <p className="mt-4">
                    Meus projetos refletem meu comprometimento em resolver desafios complexos por meio do design. Seja construindo uma plataforma de viagens ou aprimorando um site imobiliário, cada projeto é uma mistura de inovação, estratégia e princípios de design que colocam o usuário em primeiro lugar.
                </p>

            <Card className="p-5 mt-6 flex-col">
                <div className="grid sm:grid-cols-2 gap-5 w-full sm:h-[1003px] h-[1003px] ">
                    {projetos && 
                    projetos.map((e, index) => (
                        <div key={index}> 
                            <Link to={e.id} className="w-full ">
                                <TiltedCard
                                    imageSrc={e.capa}
                                    altText={e.categoria}
                                    captionText={e.categoria}
                                    containerHeight="100%"
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
                                            {e.titulo}
                                        </p>
                                    }   
                                />
                            </Link>
                        </div>
                    ))}
                </div>

            </Card>

            <Footer/>
        </section>
    )
}

export default Projetos