import PageHeader from "../PageHeader";
import IntroductionCard from "./IntroductionCard";


export default function IntroductionContent() {
    return (
        <main className="flex flex-col mx-5 my-6 gap-6 md:m-10 md:gap-10">
            <PageHeader className="w-37.5 md:w-50">
                <h2 className="text-2xl text-darkGreen font-semibold md:text-[32px]">What is</h2>
                <h2 className="text-2xl text-darkGreen font-semibold underline md:text-[32px]">Hydroponic ?</h2>
            </PageHeader>

            <IntroductionCard title="A Brief Introduction">
                <p className="text-base md:text-xl">
                    Hydroponic is a method to grow/ cultivate plants without the use of soil. Instead of using soil, plants grown on a Hydroponic System uses Plant Media to make sure the plants grow upright. Plants grown on a Hydroponic System have its roots exposed to make direct contact with a body of water below it. The purpose of the plant’s roots direct contact with a body of water is so that the plant can directly absorb nutrients from the water. Nutrient Solution is mixed in the water to feed plants, akin to fertilizing soil with fertilizer.
                </p>
            </IntroductionCard>

            <IntroductionCard title="Benefits of Hydroponic System">
                <ul className="list-disc list-outside pl-5 md:text-xl">
                    <li>
                        Hydroponic system minimizes the needs to use pesticide and herbicide because pests and weeds tend to appear more on soil.
                    </li>
                    <li>
                        You don’t have to water the plants everyday because hydroponic systems tends to have water storage which you only need to refill once a week or more (depending of the weather).
                    </li>
                    <li>
                        Hydroponic system uses less space compared to growing on soil,  more yields for smaller space.
                    </li>
                </ul>
            </IntroductionCard>
        </main>
    )
}