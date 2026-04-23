import PlantDatabaseMenuCard from "./PlantDatabaseMenuCard";
import plants from "../../data/plants"
import { Link } from "react-router";

export default function PlantDatabaseMenuList() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center w-full md:flex-row md:gap-10">
            {plants.map((plant) => (
                <Link key={plant.id} to={`/plantDatabase/${plant.id}`}>
                    <PlantDatabaseMenuCard
                        imgSrc={plant.image}
                        imgAlt={plant.imageAlt}
                        title={plant.name}
                        className="hover:cursor-pointer"
                    />
                </Link>
            ))}
        </div>
    )
}