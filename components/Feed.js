import { SparklesIcon } from "@heroicons/react/outline"
import Post from "./Post";

export default function Feed(){
    const post = [
        {
            id: "1",
            name: "UwU",
            username: "9jacoder",
            userImg: "https://avatars.githubusercontent.com/u/117041814?v=4",
            img: "https://i.pinimg.com/originals/21/e3/50/21e3503ea8f1016be1b0085805db05d2.jpg",
            text: "uwu",
            timestamp:"4 hours ago",
        },
        {
            id: "2",
            name: "OwO",
            username: "9jacoder",
            userImg: "https://avatars.githubusercontent.com/u/117041814?v=4",
            img: "https://i.pinimg.com/736x/f0/f7/ab/f0f7ab82fe333d7bea3c710731999dfc.jpg",
            text: "incredible",
            timestamp:"2 days ago",
        }
    ];
    return(
        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5"/>
                </div>
            </div>
            {post.map((post) =>(
                <Post key={post.id} post={post}/>

            ))}


        </div>
    );

}

