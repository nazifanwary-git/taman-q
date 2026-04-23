import MaterialCard from "./MaterialCard";
import SeedImg from "../../assets/Seeds.png"
import RockwoolImg from "../../assets/Rockwool.png"
import CutterImg from "../../assets/Cutter.png"
import NetpotImg from "../../assets/Netpot.png"
import WickImg from "../../assets/Wick.png"
import FertilizerImg from "../../assets/Nutrient Solution.png"
import ImpraboardImg from "../../assets/Impraboard.png"
import WaterTubImg from "../../assets/Water Tub.png"

export default function MaterialList() {
    return (
        <div className="flex flex-wrap gap-5 justify-center
        md:gap-10">
            <MaterialCard materialImg={SeedImg} imgAlt="seeds illustration">
                Seeds
            </MaterialCard>

            <MaterialCard materialImg={RockwoolImg} imgAlt="rockwool illustration">
                Rockwool
            </MaterialCard>

            <MaterialCard materialImg={CutterImg} imgAlt="cutter illustration">
                Cutter
            </MaterialCard>

            <MaterialCard materialImg={NetpotImg} imgAlt="net pot illustration">
                Net Pot
            </MaterialCard>

            <MaterialCard materialImg={WickImg} imgAlt="wick illustration">
                Wick
            </MaterialCard>

            <MaterialCard materialImg={FertilizerImg} imgAlt="fertilizer illustration">
                Fertilizer
            </MaterialCard>

            <MaterialCard materialImg={ImpraboardImg} imgAlt="impraboard illustration">
                Impraboard
            </MaterialCard>

            <MaterialCard materialImg={WaterTubImg} imgAlt="water tub illustration">
                Water Tub
            </MaterialCard>

        </div>
    )
}