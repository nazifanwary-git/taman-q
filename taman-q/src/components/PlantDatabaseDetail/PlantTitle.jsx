

export default function PlantTitle({ plantName, plantLatinName }) {
    return (
        <div className="flex flex-col gap-2
                        md:gap-4">
            <span className="text-2xl font-semibold md:text-4xl">{plantName}</span>
            <span className="text-base italic md:text-3xl">{plantLatinName}</span>
        </div>
    )
}