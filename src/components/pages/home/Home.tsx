import Cards from "@/components/cards"
import Footer from "@/components/footer/Footer"
import SobrePreview from "@/components/pages/sobre/SobrePreview";
import ProjetosPreview from "@/components/pages/projetos/ProjetosPreview";
import StackPreview from "@/components/pages/stack/StackPreview";
import RotatingText from '@/ui/RotatingText/RotatingText'

import GridMotion from '@/ui/GridMotion/GridMotion';


function Home(){

    const items = [
        'Item 1',
        <div key='jsx-item-1'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 2',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 4',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 5',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 7',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 8',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 10',
        <div key='jsx-item-3'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 11',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 13',
        <div key='jsx-item-4'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 14',
        // Add more items as needed
      ];
      

    return(
<section className="relative max-w-[1366px] m-auto">
    <div className="absolute top-0 left-0 h-[100vh] inset-0 " ></div>

  {/* GridMotion como background */}
  <div  className="absolute inset-0 bg-black/80 h-[100vh] top-0 left-0 sm:block hidden ">
    <GridMotion items={items} />
    {/* Overlay escuro */}
  </div>

  <div className="h-[100vh] flex flex-col items-center justify-center p-5 relative z-10 sm:text-white text-[#111111]">
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

    <p className=" mt-6 sm:w-[50%] text-center">
      Sou estudante apaixonado por tecnologia e design...
    </p>
  </div>

  <div className="relative z-10">
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