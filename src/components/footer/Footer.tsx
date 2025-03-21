import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import Squares from '@/ui/Squares/Squares'

function Footer() {
    return (
        <footer className="flex flex-col  relative overflow-hidden m-5">
            <div className="absolute w-full left-0 top-0 h-full overflow-hidden rounded-2xl">
            <Squares 
                speed={0.5} 
                squareSize={30}
                direction='up' // up, down, left, right, diagonal
                borderColor='#fff'
                hoverFillColor='#153033'
                />
            </div>

            <Card className="sm:p-29  items-center justify-center p-10 relative bg-transparent">
                <div className="flex flex-col items-center justify-center" >
                <h1  className="text-center font-bold text-black">Você tem alguma ideia de projeto que queira discutir?</h1>
                        <Link to={"/contato"}>
                            <Button className="w-full">
                                Entre em contato
                            </Button>
                        </Link>
                </div>

            </Card>

                

        </footer>
    );
}

export default Footer;
