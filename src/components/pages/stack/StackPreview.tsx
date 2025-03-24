import {
    Card,
  } from "@/components/ui/card"
import Folder from '@/ui/Folder/Folder'

function StackPreview(){
    return(
        
        <div className="flex flex-col mt-11 p-5">


            <h1 className="text-3xl font-medium mb-4 ">Stack</h1>

            <Card className="w-full flex items-center justify-center relative ">
                <div className="m-5" style={{ height: 'auto', width: 'auto', position: 'relative' }}>
                    <Folder 
                        color="#275A7B"
                        size={1}
                        items={[
                            { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/390px-Unofficial_JavaScript_logo_2.svg.png", link: "https://spotify.com" },
                            { image: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png", link: "https://tripadvisor.com" },
                            { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
                        ]}
                        />
                        <h2>Front-End</h2>
                </div>

                <div  className="m-5" style={{ height: 'auto', width: 'auto', position: 'relative' }}>
                    <Folder 
                        color="#4FBC69"
                        size={1}
                        items={[
                            { image: "https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png", link: "https://spotify.com" },
                            { image: "https://www.gstatic.com/devrel-devsite/prod/v1c43259e491a2af2272be031aab6f7713a1b5287c753937874e72435623bc692/firebase/images/touchicon-180.png", link: "https://tripadvisor.com" },
                            { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
                        ]}
                        />                    
                        <h2>Back-End</h2>
                </div>
            </Card>

        </div>
    )
}

export default StackPreview