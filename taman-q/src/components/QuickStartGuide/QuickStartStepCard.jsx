

export default function QuickStartStepCard({ stepImg, imgAlt, stepNumber, stepDescription }) {
    return (
        <li className="flex flex-col gap-4 justify-center items-center">
            <img src={stepImg} alt={imgAlt} className="min-h-14.5 h-14.5 object-contain
            md:h-30" />

            <div className="flex justify-center gap-4 items-center
            md:gap-6">
                <span className="inline-flex shrink-0 items-center justify-center w-8 h-8
                bg-darkGreen text-white rounded-full text-xl
                md:w-10 md:h-10 md:text-2xl">
                    {stepNumber}
                </span>
                <p className="text-base md:text-xl">{stepDescription}</p>
            </div>
        </li>
    )
}