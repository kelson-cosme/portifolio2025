import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";

function Footer() {
    return (
        <footer className="flex flex-col mt-11 relative overflow-hidden">
            <Card className="sm:p-29 p-10 relative bg-white/90 backdrop-blur-lg overflow-hidden flex flex-col items-center justify-center" style={{
                position: "relative",
                background: "radial-gradient(circle, rgba(58,55,117,1) 0%, rgba(24,24,36,1) 100%)"

            }}>
                <div className="absolute inset-0 pointer-events-none"></div>

                <h1 className="text-center font-bold text-white">Você tem alguma ideia de projeto que queira discutir?</h1>
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
