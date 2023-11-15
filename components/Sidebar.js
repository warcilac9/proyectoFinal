import Image from "next/image";
import {HomeIcon} from "@heroicons/react/solid"
import{
    BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon,
} from "@heroicons/react/outline"
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar(){
    return(
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl>:ml-24">
            {/* Twitter Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"/>
            </div>
            {/* Menu Section */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
                <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
                <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
                <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
                <SidebarMenuItem text="Profile" Icon={UserIcon}/>
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
            </div>
        </div>
    )
}