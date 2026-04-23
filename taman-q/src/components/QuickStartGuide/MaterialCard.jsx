

export default function MaterialCard({ materialImg, imgAlt, children }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <img src={materialImg} alt={imgAlt} className="min-w-20 min-h-20 h-20 w-20 object-contain
            md:w-40 md:h-40" />
            <span className="text-base text-center md:text-xl">{children}</span>
        </div>
    )
}