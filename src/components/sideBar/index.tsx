
import { Button } from "@/components/ui/button"
import { Link } from "react-router";

import {
    Sheet,
    SheetContent,

    SheetTrigger,
  } from "@/components/ui/sheet"

import {  FolderCode, HomeIcon, Instagram, Linkedin, Package, PanelBottom, Phone, Terminal, UserRound } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";


function SideBar(){

    return(
        <div className="flex  w-full flex-col gb-muted/40">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-[18vw] border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-start gap-4 px-[2vw] py-[2vw] w-full ">
                    <TooltipProvider>
                        <Link className="flex w-9 h-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full" to={"/#"}>
                            <Package className="flex h-4 w-4 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full" />
                            <span className="sr-only">Avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="flex w-full gap-3 shrink-0 items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" to={"/"}>
                                    <HomeIcon className="w-5 h-5" />
                                    Inicio
                                    <span className="sr-only">Inicio</span>
                                </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="flex w-full gap-3 shrink-0 items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" to={"/sobre"}>
                                    <UserRound className="w-5 h-5" />
                                    Sobre
                                    <span className="sr-only">Sobre</span>
                                </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="flex w-full gap-3 shrink-0 items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" to={"/projetos"}>
                                    <FolderCode className="w-5 h-5" />
                                    Projetos
                                    <span className="sr-only">Projetos</span>
                                </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="flex w-full gap-3 shrink-0 items-center  rounded-lg text-muted-foreground transition-colors hover:text-foreground" to={"/stack"}>
                                    <Terminal className="w-5 h-5" />
                                    Stack
                                    <span className="sr-only">Stack</span>
                                </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link className="flex w-full gap-3 shrink-0 items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" to={"/contato"}>
                                    <Phone className="w-5 h-5" />
                                    Contato
                                    <span className="sr-only">Contato</span>
                                </Link>
                            </TooltipTrigger>
                        </Tooltip>


                    </TooltipProvider>
                </nav>

                <nav className="mt-auto flex flex-col items-start gap-4 px-[2vw] py-[2vw] w-full">
                       <TooltipProvider>
                        <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link className="flex w-full gap-3 shrink-0 items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" to={"/#"}>
                                        <Linkedin className="w-5 h-5" />
                                            Linkedin
                                        <span className="sr-only">Contato</span>
                                    </Link>
                                </TooltipTrigger>

                                <TooltipTrigger asChild>
                                    <Link className="flex w-full gap-3 shrink-0 items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" to={"/#"}>
                                        <Instagram className="w-5 h-5" />
                                            Instagram
                                        <span className="sr-only">Contato</span>
                                    </Link>
                                </TooltipTrigger>
                            </Tooltip>                       </TooltipProvider>
                        
                </nav>
            </aside>

            {/* mobile */}
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl:14 mb-4 sm:mb-0 ">
                <header className="stick top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 rounded-[9px]">
                    
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5"/>
                                <span className="sr-only">Abrir / fechar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-x p-5">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link to="/#" className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-sidebar-primary-foreground md:text-base">
                                    <Package className="h-5 w-5 transition-all" />
                                    <span className="sr-only">Logo do Projeto</span>
                                </Link>

                                <Link to="/" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <HomeIcon className="h-5 w-5 transition-all" />
                                    Inicio
                                </Link>

                                <Link to="/sobre" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <UserRound className="h-5 w-5 transition-all" />
                                    Sobre
                                </Link>

                                <Link to="/projetos" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <FolderCode className="h-5 w-5 transition-all" />
                                    Projetos
                                </Link>

                                <Link to="/stack" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Terminal className="h-5 w-5 transition-all" />
                                    Stack
                                </Link>

                                <Link to="/contato" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Phone className="h-5 w-5 transition-all" />
                                    Contato
                                </Link>
                            </nav>

                            <nav className="mt-auto grid gap-6 text-lg font-medium">
                                <Link to="https://www.linkedin.com/in/kelson-cosme/" target="_blank" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Linkedin className="h-5 w-5 transition-all" />
                                    Linkedin
                                </Link>

                                <Link to="https://www.instagram.com/kelson-cosme/" target="_blank" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Instagram className="h-5 w-5 transition-all" />
                                    Instagram
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <h2>Menu</h2>
                    
                </header>
            </div>

        </div>
    )
}

export default SideBar