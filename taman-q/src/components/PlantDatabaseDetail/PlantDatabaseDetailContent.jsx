import BackButton from "./BackButton";
import PlantDatabaseDetailCard from "./PlantDatabaseDetailCard";


export default function PlantDatabaseDetailContent({ plant }) {
    return (
        <main className="mx-5 my-6 flex flex-col gap-6 items-center
        md:m-10 md:gap-10">
            <BackButton>
                Back
            </BackButton>

            <PlantDatabaseDetailCard plant={plant} />
        </main>
    )
}