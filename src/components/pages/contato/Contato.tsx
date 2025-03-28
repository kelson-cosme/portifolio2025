import {Card} from "@/components/ui/card"

import Footer from "@/components/footer/Footer"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

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
      >
        Seja fazendo um brainstorming de um novo projeto, discutindo otimizações de design ou apenas compartilhando insights criativos, estou sempre animado para colaborar. Entre em contato comigo e vamos criar algo excepcional — juntos!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-5 mt-6 flex-col grid grid-cols-2"
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
                src="https://ijvswpmlxhukauulpzjd.supabase.co/storage/v1/object/public/imagens/redeSociais/zap.webp" 
                alt="WhatsApp" 
              />
            </div>
            <p className="p-3">(65) 99664-6289</p>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link 
            className="flex items-center" 
            to={"https://google.com"} 
            target="_blank"
          >
            <div className="w-[15%]">
              <img 
                src="https://ijvswpmlxhukauulpzjd.supabase.co/storage/v1/object/public/imagens/redeSociais/linkedin.webp" 
                alt="LinkedIn" 
              />
            </div>
            <p className="p-3">kelson-cosme</p>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link 
            to={"/"} 
            className="flex items-center"
          >
            <div className="w-[15%]">
              <img 
                src="https://ijvswpmlxhukauulpzjd.supabase.co/storage/v1/object/public/imagens/redeSociais/insta.webp" 
                alt="Instagram" 
              />
            </div>
            <p className="p-3">kelson.almeida</p>
          </Link>
        </motion.div>
      </motion.div>
    </section>

            <Footer/>
        </>
    )
}

export default Contato