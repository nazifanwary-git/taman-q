import PlantDatabaseDetailLayout from "../components/Fragments/PlantDatabaseDetailLayout";
import { useParams } from "react-router";
import plants from "../data/plants"

export default function PlantDatabaseDetailPage() {
    const { plantId } = useParams();

    const plant = plants.find(p => p.id === plantId)

    if (!plant) return <h1>Plant not found</h1>
    return (
        <PlantDatabaseDetailLayout plant={plant} />
    )
}