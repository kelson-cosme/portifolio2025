import Cards from "@/components/cards"
import Footer from "@/components/footer/Footer"
import SobrePreview from "@/components/pages/sobre/SobrePreview";
import ProjetosPreview from "@/components/pages/projetos/ProjetosPreview";
import StackPreview from "@/components/pages/stack/StackPreview";
import RotatingText from '@/ui/RotatingText/RotatingText'

function Home(){
    return(
        <section >
            <div className="sm:flex  items-center ">
                <h1 className="text-5xl font-semibold ">Olá👋, </h1>

                <h1 className="text-3xl ">

                <RotatingText
                    texts={["Meu nome é Kelson", "Sou Desenvolvedor Front-end", "Transformo ideias em código", "Criando experiências incríveis"]}
                    mainClassName="px-2 text-white sm:px-2 md:px-3 bg-gradient-to-r from-[#143033] to-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"first"}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    animatePresenceMode={"wait"}
                    animatePresenceInitial={true}
                    exit={{ y: "-120%", opacity: 0 }}
                    staggerDuration={0}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                    loop={true}
                    auto={true}
                    splitBy={"characters"}
                    onNext={undefined}
                />
                </h1>
                
            </div>
           
                
            <p className="text-[#4D4D4D] mt-6">Sou estudante apaixonado por tecnologia e design. Desde que comecei a explorar o mundo do desenvolvimento web, me dediquei a aprender e aplicar os princípios fundamentais da criação de interfaces de usuário dinâmicas e responsivas. Embora ainda não tenha experiência formal na indústria, tenho investido meu tempo em projetos pessoais e cursos online para aprimorar minhas habilidades.
            </p>
            
            <div className="relative">


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