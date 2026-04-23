

export default function PlantDatabaseMenuCard({ imgSrc, imgAlt, title, className }) {
    return (
        <div className={`flex w-full gap-0 h-20 bg-white rounded-lg
        md:flex-col md:h-158.5 md:w-80 ${className}`}>
            <img src={imgSrc} alt={imgAlt}
                className="object-cover object-top h-full w-full
                md:object-right" />
            <span className="flex items-end px-3 py-3 w-full text-xl
            md:text-[32px]">
                {title}
            </span>
        </div>
    )
}