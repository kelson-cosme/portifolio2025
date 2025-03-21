import {
    Card,
  } from "@/components/ui/card"
import Folder from '@/ui/Folder/Folder'

function StackPreview(){
    return(
        
        <div className="flex flex-col mt-11 p-5">


            <h1 className="text-3xl font-medium mb-4 ">Stack</h1>

            <Card className="w-full flex  relative ">
                <div className="m-5" style={{ height: 'auto', width: 'auto', position: 'relative' }}>
                    <Folder 
                        color="#275A7B"
                        size={1}
                        items={[
                            { image: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58", link: "https://spotify.com" },
                            { image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=900&h=500&s=1", link: "https://tripadvisor.com" },
                            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
                        ]}
                        />
                        <h2>Front-End</h2>
                </div>

                <div  className="m-7" style={{ height: 'auto', width: 'auto', position: 'relative' }}>
                    <Folder 
                        color="#4FBC69"
                        size={1}
                        items={[
                            { image: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58", link: "https://spotify.com" },
                            { image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=900&h=500&s=1", link: "https://tripadvisor.com" },
                            { image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
                        ]}
                        />                    
                        <h2>Back-End</h2>
                </div>
            </Card>

        </div>
    )
}

export default StackPreview