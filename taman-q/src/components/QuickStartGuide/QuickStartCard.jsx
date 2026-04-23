


export default function QuickStartCard({ title, children }) {
    return (
        <div className="flex flex-col p-4 gap-5 bg-white min-w-80 w-full rounded-xl
        md:p-12 md:gap-10">
            <h2 className="text-xl text-black font-semibold md:text-2xl">{title}</h2>
            {children}
        </div>
    )
}