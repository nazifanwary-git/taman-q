

export default function PlantInfoItem({ label, value }) {
    return (
        <div className="flex flex-col gap-2
                        md:gap-4">
            <span className="text-base font-semibold md:text-3xl">{label}</span>
            <span className="text-base md:text-2xl">{value}</span>
        </div>
    )
}