import { type } from "os"
import Image from "next/image"

const UserCard = ({ type }: { type: string }) => {

    return (
        <div className="rounded-2xl odd:bg-primary even:bg-tlhlight2 p-4 flex-1">
            <div className="flex justify-between items-center">
                <span className="text-[12px] bg-white px-2 py-1 rounded-full text-primary">2025/26</span>
                <Image src="/more.png" alt="" 
                    width={20} 
                    height={20}/>
            </div>
            <h1 className="text-2xl font-semibold my-1">679</h1>
            <h2 className="capitalized text-sm font-medium text-white">{type}</h2>
        </div>
    )
}

export default UserCard