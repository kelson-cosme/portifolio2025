import { useCallback } from 'react';
import Cards from "@/components/cards"
import Footer from "@/components/footer/Footer"
import SobrePreview from "@/components/pages/sobre/SobrePreview";
import ProjetosPreview from "@/components/pages/projetos/ProjetosPreview";
import StackPreview from "@/components/pages/stack/StackPreview";
import RotatingText from '@/ui/RotatingText/RotatingText'
import GridMotion from '@/ui/GridMotion/GridMotion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import type { Container } from "tsparticles-engine"; // Importe o tipo Container

function Home(){
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles container loaded", container);
    }
  }, []);

  const items = [
    // Textos simples
    'React',
    <div key='jsx-tech-1' className="text-blue-400">Next.js</div>,
    
    // Imagens de projetos/tecnologias
    'https://ijvswpmlxhukauulpzjd.supabase.co/storage/v1/object/public/imagens//f2.webp', // Imagem de código
    
    // Mais textos
    'TypeScript',
    <div key='jsx-tech-2' className="text-purple-400">Tailwind CSS</div>,
    
    // Componentes simples
    'UI/UX',
    <div key='jsx-tech-3' className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <span>Disponível</span>
    </div>,
    
    // Mais imagens
    'https://ijvswpmlxhukauulpzjd.supabase.co/storage/v1/object/public/imagens//f1.webp', // Imagem de design
    
    // Itens diversos
    'JavaScript',
    <div key='jsx-tech-4' className="text-yellow-400">ES6+</div>,
    
    // Códigos exemplos
    'CSS Modules',
    <div key='jsx-code-1' className="text-xs font-mono">npm run dev</div>,
    
    // Imagens de interfaces
    'https://ijvswpmlxhukauulpzjd.supabase.co/storage/v1/object/public/imagens//f3.webp', // Imagem de app
    
    // Habilidades
    'Responsive Design',
    <div key='jsx-tech-5' className="text-pink-400">Animations</div>,
    
    // Ícones como componentes
    'Web Performance',
    <div key='jsx-icon-1' className="text-2xl">🚀</div>,
    
    // Última imagem
    'https://ijvswpmlxhukauulpzjd.supabase.co/storage/v1/object/public/imagens//f4.webp', // Imagem de trabalho
    
    // Finalizando
    'Clean Code',
    <div key='jsx-tech-6' className="text-green-400">Git</div>
  ];

  return(
    <section className="relative overflow-hidden m-auto">
      {/* Background para desktop */}
      <div className="absolute inset-0 bg-black/80 h-[100vh] top-0 left-0 sm:block hidden">
        <GridMotion items={items} />
      </div>

      {/* Partículas interativas (funciona em mobile) */}
      <div className="sm:hidden absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: { color: "transparent" },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" }
              },
              modes: {
                push: { quantity: 2 },
                repulse: { distance: 100, duration: 0.4 }
              }
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#3b82f6",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1.5
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false
              },
              number: { density: { enable: true }, value: 200 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } }
            },
            detectRetina: true
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="h-[100vh] flex flex-col items-center justify-center p-5 relative z-10 sm:text-white text-[#111111] ">

          <div className="sm:flex justify-center items-center">
            <h1 className="text-5xl font-semibold ">Olá👋,</h1>

            <h1 className="text-3xl">
              <RotatingText
                texts={[
                  "Meu nome é Kelson",
                  "Sou Desenvolvedor Front-end",
                  "Transformo ideias em código",
                  "Criando experiências incríveis",
                ]}
                mainClassName="px-2 text-white sm:px-2 md:px-3 bg-gradient-to-r from-[#143033] to-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                animatePresenceMode="wait"
                animatePresenceInitial
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
                loop
                auto
                splitBy="characters"
              />
            </h1>
          </div>



          <p
            className="mt-6 sm:w-[50%] text-center text-[clamp(1rem,2vw,1.2rem)]"
            style={{
              lineHeight: 1.5,
              WebkitFontSmoothing: "antialiased",
              backfaceVisibility: "hidden"
            }}
          >
            Sou estudante apaixonado por tecnologia e design...
          </p>
        </div>

      <div className="relative z-10 max-w-[1366px] m-auto">
        <Cards />
        <SobrePreview />
        <ProjetosPreview />
        <StackPreview />
        <Footer />
      </div>
    </section>
  )
}

export default Home