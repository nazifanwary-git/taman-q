import TestImg from "../../assets/lettuce1.png"
import PlantInfoItem from "./PlantInfoItem"
import PlantTitle from "./PlantTitle"


export default function PlantDatabaseDetailCard({ plant }) {
    return (
        <div className="flex flex-col gap-6 p-4 bg-white rounded-lg items-center w-full
            md:max-w-300 md:gap-8 md:p-10">
            <div className="flex gap-4 justify-between w-full">
                <div className="flex flex-col gap-4 min-w-34 w-full
                    md:gap-6">
                    <PlantTitle
                        plantName={plant.name}
                        plantLatinName={plant.latinName}
                    />

                    <PlantInfoItem
                        label="Family Name"
                        value={plant.familyName}
                    />

                    <PlantInfoItem
                        label="Common Name"
                        value={plant.commonName}
                    />
                </div>

                <img src={plant.image} alt={plant.imageAlt}
                    className="min-w-34 w-full h-full object-contain md:max-h-80" />
            </div>

            <div className="w-full h-px bg-black"></div>

            <p className="text-base text-justify
                md:text-2xl">
                {plant.description}
            </p>
        </div>
    )
}