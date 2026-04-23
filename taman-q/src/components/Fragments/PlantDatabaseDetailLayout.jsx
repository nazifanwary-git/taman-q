import Footer from "../Footer";
import Navbar from "../Navbar";
import PlantDatabaseDetailContent from "../PlantDatabaseDetail/PlantDatabaseDetailContent";


export default function PlantDatabaseDetailLayout({ plant }) {
    return (
        <div className="bg-slate-200 min-h-dvh grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <PlantDatabaseDetailContent plant={plant} />
            <Footer />
        </div>
    )
}