import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 shadow-sm">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3 py-1 bg-gray-50">
                <Image src="/search.png" alt="Search" width={14} height={14} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-xs w-40"
                />
            </div>

            {/* Icons + User */}
            <div className="flex items-center gap-6 justify-end w-full">
                {/* Messages */}
                <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                    <Image src="/message.png" alt="Messages" width={18} height={18} />
                </div>

                {/* Notifications */}
                <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition relative">
                    <Image
                        src="/announcement.png"
                        alt="Notifications"
                        width={18}
                        height={18}
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-green-500 text-white text-[10px] font-semibold rounded-full">
                        1
                    </div>
                </div>

                {/* User Info */}
                <div className="hidden sm:flex flex-col text-right">
                    <span className="text-xs font-medium">Muhammad</span>
                    <span className="text-[10px] text-gray-500">Admin</span>
                </div>

                {/* Avatar */}
                <Image
                    src="/avatar.png"
                    alt="User Avatar"
                    width={36}
                    height={36}
                    className="rounded-full cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Navbar;
