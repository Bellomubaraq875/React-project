import Image from "next/image";

const TableSearch = () => {
    return (
        <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3 py-1 bg-gray-50">
            <Image
                src="/search.png" 
                alt="Search"
                width={14}
                height={14}
            />
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-gray-700"
            />
        </div>
    );
}

export default TableSearch;
