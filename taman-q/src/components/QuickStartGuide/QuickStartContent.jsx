import PageHeader from "../PageHeader";
import MaterialList from "./MaterialList";
import QuickStartCard from "./QuickStartCard";
import QuickStartStep from "./QuickStartStep";


export default function QuickStartContent() {
    return (
        <main className="flex flex-col mx-5 my-6 gap-6 md:m-10 md:gap-10">
            <PageHeader className="w-51.5 md:w-68.5">
                <h2 className="text-2xl text-darkGreen font-semibold md:text-[32px]">Hydroponics</h2>
                <h2 className="text-2xl text-darkGreen font-semibold md:text-[32px]">Quick Start Guide</h2>
            </PageHeader>

            <QuickStartCard title="What Do I Need to Get Started?">
                <p className="text-base text-black md:text-xl">
                    Beginners wanting to try out growing plants with hydroponic method only need to prepare the necessary items, such as :
                </p>

                <MaterialList />

                <p className="text-base text-black md:text-xl">
                    After preparing the necessary materials, you can then follow these steps :
                </p>

                <QuickStartStep />

            </QuickStartCard>
        </main>
    )
}