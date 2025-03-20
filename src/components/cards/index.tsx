import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Aurora from '@/ui/Aurora/Aurora';


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SobrePreview from "@/components/pages/sobre/SobrePreview";
import ProjetosPreview from "@/components/pages/projetos/ProjetosPreview";
import StackPreview from "../pages/stack/StackPreview";
import Footer from "../footer/Footer";

function Cards() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const handleExpand = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <>


        <div className="p-10 grid sm:grid-cols-3 gap-15 mt-5 relative">
            <div className=" absolute top-0 left-0 w-full h-full">

                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                    />
            </div>


            {[
                {
                    title: "UI/UX Designer",
                    color: "rgb(0, 255, 111)",
                    svg: (
                        <path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>
                    ),
                },
                {
                    title: "Web Designer",
                    color: "rgb(0, 146, 179)",
                    svg: (
                        <path d="M199.37,55.31A101.32,101.32,0,0,0,128,26h-1A102,102,0,0,0,26,128c0,42.09,26.07,77.44,68,92.26A30.21,30.21,0,0,0,104.11,222,30.06,30.06,0,0,0,134,192a18,18,0,0,1,18-18h46.21a29.82,29.82,0,0,0,29.25-23.31A102.71,102.71,0,0,0,230,127.11,101.25,101.25,0,0,0,199.37,55.31Z"></path>
                    ),
                },
                {
                    title: "SEO Specialist",
                    color: "rgb(145, 0, 230)",
                    svg: (
                        <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path>
                    ),
                },
            ].map((item, index) => (
                
                <Card
                    key={index}
                    onClick={() => handleExpand(index)}
                    className="cursor-pointer relative"
                    
                >


                    <CardHeader>
                        
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        style={{
                            userSelect: "none",
                            width: expandedCard === index ? "15%" : "35%",
                            height: "100%",
                            display: "inline-block",
                            flexShrink: 0,
                            transition: "width 0.3s",
                        }}
                    >
                        {/* Definição do gradiente */}
                        <defs>
                            <linearGradient id={`fadeGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="60%" stopColor={item.color} />
                                <stop offset="90%" stopColor="transparent" />
                            </linearGradient>
                        </defs>

                        {/* Aplicação do gradiente */}
                        <path d={item.svg.props.d} fill={`url(#fadeGradient-${index})`} />
                    </svg>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>

                    {/* Animação de entrada e saída do conteúdo */}
                    <AnimatePresence>
                        {expandedCard === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            ))}

        </div>

        <SobrePreview />
        <ProjetosPreview />
        <StackPreview />
        <Footer />

        </>

    );
}

export default Cards;
