import { ChevronRight } from "lucide-react"

export default function DashboardMenuCard(props) {
    const { menuImg, imgAlt, title } = props
    return (
        <div className="w-full min-h-18 flex bg-white rounded-lg overflow-hidden
        hover:cursor-pointer md:flex-col md:h-full">
            <img src={menuImg} alt={imgAlt}
                className="w-20 object-cover object-center
                md:w-full md:object-center" />

            <div className="flex w-full h-full gap-4 justify-between items-center px-4 py-3">
                <span className="text-xl font-semibold md:text-2xl">
                    {title}
                </span>
                <ChevronRight className="size-12" />
            </div>
        </div>
    )
}