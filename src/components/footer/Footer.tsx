import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import Squares from '@/ui/Squares/Squares'

function Footer() {
    return (
        <footer className="flex flex-col mt-11 relative overflow-hidden ">
            <div className="absolute w-full left-0 top-0 h-full overflow-hidden rounded-2xl ">
            <Squares 
                speed={0.5} 
                squareSize={30}
                direction='up' // up, down, left, right, diagonal
                borderColor='#fff'
                hoverFillColor='#153033'
                />
            </div>
            <Card className="sm:p-29 p-10 relative bg-transparent ">

                <h1  className="text-center font-bold text-black">Você tem alguma ideia de projeto que queira discutir?</h1>
                <Button>
                    <Link to={"/contato"}>
                        Entre em contato
                    </Link>
                </Button>
            </Card>

                

        </footer>
    );
}

export default Footer;
