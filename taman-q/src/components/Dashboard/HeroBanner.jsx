import heroBannerImg from "../../assets/herobanner.jpg"

export default function HeroBanner() {
    return (
        <div className="min-w-90 min-h-120 w-full relative mb-6 md:mb-10">
            <img src={heroBannerImg} alt="lettuce wallpaper"
                className="min-w-90 min-h-120 w-full h-full absolute -scale-x-100 object-cover object-[45%_50%]" />

            <div className="absolute bottom-4 left-4 w-82 md:bottom-10 md:left-10">
                <h1 className="text-[32px] font-semibold md:text-10">
                    Create Your Hydroponic Garden, Right Now.
                </h1>
            </div>
        </div>
    )
}