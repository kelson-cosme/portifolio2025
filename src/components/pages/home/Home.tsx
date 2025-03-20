import Cards from "@/components/cards"


function Home(){
    return(
        <section >
            <h1 className="text-4xl font-semibold">Hey👋, I'm Kelson!</h1>
            <p className="text-[#4D4D4D] mt-6">Eu sou Nicole Harper, uma Designer Criativa apaixonada com múltiplas funções, como você verá abaixo. Eu me concentro em criar experiências digitais intuitivas, amigáveis ​​ao usuário e visualmente envolventes que resolvem problemas reais e entregam resultados mensuráveis.</p>
            
            <div className="relative">


                <Cards />

            </div>
        </section>
    )
}

export default Home