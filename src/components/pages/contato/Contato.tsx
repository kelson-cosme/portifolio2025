import {Card} from "@/components/ui/card"

import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import Zap from "../../../../public/RedeSociais/zap.webp"
import Linkedin from "../../../../public/RedeSociais/linkedin.webp"
import Instagram from "../../../../public/RedeSociais/insta.webp"

function Contato(){
    return(
        <>  
        <section className="max-w-[1366px] m-auto pl-5 pr-5 pb-5 sm:pt-5">
          
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-medium"
          >
            Vamos nos conectar!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4"
          >
            Seja fazendo um brainstorming de um novo projeto, discutindo otimizações de design ou apenas compartilhando insights criativos, estou sempre animado para colaborar. Entre em contato comigo e vamos criar algo excepcional — juntos!
          </motion.p>

        <Card className="p-5 mt-6 flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="  flex-col grid gap-5 sm:grid-cols-2"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to={"https://wa.me/5565996646289"} 
                target="_blank" 
                className="flex items-center"
                
              >
                <div className="w-[15%]">
                  <img 
                    className="w-[100%]" 
                    src={Zap}
                    alt="WhatsApp" 
                  />
                </div>
                <p className="p-3">(65) 99664-6289</p>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                className="flex items-center" 
                to={"https://www.linkedin.com/in/kelson-cosme/"} 
                target="_blank"
              >
                <div className="w-[15%]">
                  <img 
                    src={Linkedin}
                    alt="LinkedIn" 
                  />
                </div>
                <p className="p-3">kelson-cosme</p>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to={"https://www.instagram.com/kelson.almeida/"} 
                className="flex items-center"
                target="_blank"
              >
                <div className="w-[15%]">
                  <img 
                    src={Instagram}
                    alt="Instagram" 
                  />
                </div>
                <p className="p-3">kelson.almeida</p>
              </Link>
            </motion.div>
          </motion.div>
          </Card>

    </section>

        </>
    )
}

export default Contato