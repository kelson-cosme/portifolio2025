import {Card} from "@/components/ui/card"
import Footer from "@/components/footer/Footer"
import { useEffect } from "react";

import Css from "../../../../public/Tecnologias/css.png"
import Figma from "../../../../public/Tecnologias/figma.png"
import Firebase from "../../../../public/Tecnologias/firebase.png"
import Gitub from "../../../../public/Tecnologias/github.png"
import Html from "../../../../public/Tecnologias/html.png"
import JavaScript from "../../../../public/Tecnologias/javascript.png"
import MercadoPago from "../../../../public/Tecnologias/mercadoPago.png"
import Node from "../../../../public/Tecnologias/node.png"
import Photoshop from "../../../../public/Tecnologias/photoshop.png"
import React from "../../../../public/Tecnologias/react.png"
import Shadcn from "../../../../public/Tecnologias/shadcn.png"
import Supabase from "../../../../public/Tecnologias/supabase.png"
import Tailwind from "../../../../public/Tecnologias/tailwind.png"
import Typescript from "../../../../public/Tecnologias/typescript.png"
import Vite from "../../../../public/Tecnologias/vite.png"



function Stack(){
        useEffect(() => {
            window.scrollTo(0, 0); // Garante que a página comece no topo ao carregar
        }, []);
    return(
        <section className="max-w-[1366px] m-auto pl-5 pr-5 pb-5 sm:pt-5">
            <h1 className="text-5xl font-medium">Stacks</h1>
            <p className="mt-4">
                Hoje em dia trabalho com varias ferramentas para dar vida às minhas ideias. Meu objetivo é criar designs que não sejam apenas visualmente atraentes, mas também otimizados para usabilidade, acessibilidade e desempenho.
            </p>

            <Card className="p-5 mt-6 flex-col">
                <h2 className="text-[17px] font-bold">🖌️ Ferramentas de Design e Prototipagem</h2>

                <div className="grid sm:grid-cols-2 gap-9">

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Figma} alt="" />
                            <h3 className="font-medium">Fima</h3>
                        </div>

                        <p className="text-justify">Eu uso o Figma para criar wireframes, protótipos e designs de UI de alta fidelidade. Seus recursos de colaboração em tempo real o tornam perfeito para trabalhar em estreita colaboração com as equipes e obter feedback instantâneo.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Photoshop} alt="" />
                            <h3 className="font-medium">Photoshop</h3>
                        </div>

                        <p className="text-justify">
                            O Photoshop é essencial para mim ao editar imagens ou criar recursos visuais detalhados, como ícones ou banners que aprimoram a interface do usuário.
                        </p>
                    </div>
                </div>

                <h2 className="text-[17px] font-bold">🛠️ Ferramentas de Desenvolvimento e Implementação</h2>
                
                <div className="grid sm:grid-cols-2 gap-9">

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Html} alt="" />
                            <h3 className="font-medium">HTML</h3>
                        </div>

                        <p className="text-justify">Utilizo HTML para estruturar o conteúdo das páginas web, garantindo que todos os elementos da interface sejam semanticamente organizados e acessíveis.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Css} alt="" />
                            <h3 className="font-medium">CSS</h3>
                        </div>

                        <p className="text-justify">
                        Uso CSS para estilizar e dar vida às interfaces que desenvolvo, criando layouts responsivos, animações sutis e experiências visuais agradáveis para o usuário.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={React} alt="" />
                            <h3 className="font-medium">ReactJs</h3>
                        </div>

                        <p className="text-justify">
                        Emprego ReactJS para construir interfaces dinâmicas e interativas, utilizando componentes reutilizáveis que facilitam a escalabilidade e manutenção dos projetos.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Node} alt="" />
                            <h3 className="font-medium">NodeJs</h3>
                        </div>

                        <p className="text-justify">
                        Utilizo NodeJS para desenvolver o backend das aplicações, criando APIs eficientes e garantindo uma comunicação rápida e segura entre front-end e banco de dados.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Tailwind} alt="" />
                            <h3 className="font-medium">Tailwind</h3>
                        </div>

                        <p className="text-justify">
                        Uso Tailwind CSS para estilizar interfaces de forma rápida e eficiente, aplicando classes utilitárias que tornam o desenvolvimento mais ágil e organizado.</p>
                    </div>
                    
                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Vite} alt="" />
                            <h3 className="font-medium">Vite</h3>
                        </div>

                        <p className="text-justify">
                        O Vite é minha ferramenta preferida para criar projetos front-end modernos. Ele oferece um ambiente de desenvolvimento super rápido, com recarregamento instantâneo e build otimizado.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Typescript} alt="" />
                            <h3 className="font-medium">TypeScript</h3>
                        </div>

                        <p className="text-justify">
                        Utilizo TypeScript para adicionar tipagem estática ao JavaScript, aumentando a segurança do código e facilitando a identificação de erros durante o desenvolvimento.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={JavaScript} alt="" />
                            <h3 className="font-medium">JavaScript</h3>
                        </div>

                        <p className="text-justify">
                        JavaScript é essencial para mim na criação de interatividade e dinamismo nas interfaces web, possibilitando a construção de experiências fluidas para o usuário.</p>
                    </div>

                    
                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Shadcn} alt="" />
                            <h3 className="font-medium">Shadcn UI/UX</h3>
                        </div>

                        <p className="text-justify">
                        Utilizo o Shadcn UI para acelerar a criação de componentes visuais elegantes e acessíveis, garantindo uma interface limpa e consistente.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={MercadoPago} alt="" />
                            <h3 className="font-medium">Api MercadoPago</h3>
                        </div>

                        <p className="text-justify">
                        Uso a API do Mercado Pago para integrar sistemas de pagamento nas aplicações, garantindo uma experiência de compra segura e fluida para o usuário.</p>
                    </div>

                </div>


                <h2 className="text-[17px] font-bold">🗄️ Banco de Dados</h2>

                <div className="grid sm:grid-cols-2 gap-5">

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Firebase} alt="" />
                            <h3 className="font-medium">Firebase</h3>
                        </div>

                        <p className="text-justify">Utilizo o Firebase para gerenciar autenticação, banco de dados em tempo real e hospedagem de aplicações, oferecendo uma solução completa para projetos web e mobile.</p>
                    </div>

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Supabase} alt="" />
                            <h3 className="font-medium">Supabase</h3>
                        </div>

                        <p className="text-justify">
                            Uso o Supabase como alternativa open source ao Firebase, principalmente para banco de dados PostgreSQL e autenticação simples, garantindo escalabilidade e flexibilidade nos projetos.
                        </p>
                    </div>
                </div>

                <h2 className="text-[17px] font-bold">🌐 Hospedagem de Código-Fonte</h2>

                <div className="grid sm:grid-cols-2 gap-9">

                    <div>
                        <div  className="w-40 flex items-center">
                            <img className="w-20" src={Gitub} alt="" />
                            <h3 className="font-medium">GitHub</h3>
                        </div>

                        <p className="text-justify">Utilizo o GitHub para versionar e armazenar meus projetos, facilitando a colaboração com outros desenvolvedores e mantendo um histórico organizado das alterações no código.</p>
                    </div>
                </div>
            </Card>

            <Footer/>
        </section>
    )
}

export default Stack