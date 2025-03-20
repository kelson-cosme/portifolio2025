import {
    Card,
  } from "@/components/ui/card"
import Folder from '@/ui/Folder/Folder'

function StackPreview(){
    return(
        
        <div className="flex flex-col mt-11">


            <h1 className="text-3xl font-medium mb-4">Stack</h1>

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
                {/* <p className="absolute bottom-0 right-0 p-4 font-medium"><Link to={"/stack"}>Ver completo</Link> </p>

                <div className="sm:flex items-center ">
                    <div className="bg-[#f7f7f7] p-7 rounded-2xl flex justify-center" >
                        <img width={'50vw'} src="https://cdn-icons-png.freepik.com/512/5968/5968267.png?ga=GA1.1.483244172.1742009398" alt="" />
                    </div>
                    <p className="m-3 text-center font-medium">HTML</p>
                </div>

                <div className="sm:flex items-center">
                    <div className="bg-[#f7f7f7] p-7 rounded-2xl flex justify-center" >
                        <img width={'50vw'} src="https://cdn-icons-png.freepik.com/512/5968/5968242.png?ga=GA1.1.483244172.1742009398" alt="" />
                    </div>
                    <p className="m-3 text-center font-medium">CSS</p>
                </div>

                <div className="sm:flex items-center">
                    <div className="bg-[#f7f7f7] p-7 rounded-2xl flex justify-center" >
                        <img width={'50vw'} src="https://cdn-icons-png.freepik.com/512/17003/17003397.png?ga=GA1.1.483244172.1742009398" alt="" />
                    </div>
    
                    <p className="m-3 text-center font-medium">ReactJS</p>
                </div>

                <div className="sm:flex items-center">
                    <div className="bg-[#f7f7f7] p-7 rounded-2xl flex justify-center" >
                        <img width={'50vw'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTDAuIHtknl2Sb1V3z1J8LgUoapgp_qChJA&s" alt="" />
                    </div>
                    <p className="m-3 text-center font-medium">Firebase</p>
                </div>

                <div className="sm:flex items-center">
                    <div className="bg-[#f7f7f7] p-7 rounded-2xl flex justify-center" >
                        <img width={'50vw'} src="https://cdn-icons-png.freepik.com/512/5968/5968292.png?ga=GA1.1.483244172.1742009398" alt="" />
                    </div>
                    <p className="m-3 text-center font-medium">JavaScript</p>
                </div>

                <div className="sm:flex items-center">
                    <div className="bg-[#f7f7f7] p-7 rounded-2xl flex justify-center" >
                        <img width={'50vw'} src="https://cdn-icons-png.freepik.com/512/919/919847.png?ga=GA1.1.483244172.1742009398" alt="" />
                    </div>
                    <p className="m-3 text-center font-medium">Git/GitHub</p>
                </div> */}
            </Card>

        </div>
    )
}

export default StackPreview