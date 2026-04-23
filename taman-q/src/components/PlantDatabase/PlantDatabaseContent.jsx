import PageHeader from "../PageHeader";
import PlantDatabaseMenuList from "./PlantDatabaseMenuList";

export default function PlantDatabaseContent() {
    return (
        <main className="flex flex-col mx-5 my-6 gap-6 md:m-10 md:gap-10">
            <PageHeader className="w-full">
                <h2 className="text-2xl text-darkGreen font-semibold md:text-[32px]">Plant</h2>
                <h2 className="text-2xl text-darkGreen font-semibold md:text-[32px]">Database</h2>
            </PageHeader>

            <PlantDatabaseMenuList />
        </main>
    )
}