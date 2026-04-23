import Footer from "../Footer";
import Navbar from "../Navbar";
import PlantDatabaseContent from "../PlantDatabase/PlantDatabaseContent";


export default function PlantDatabaseLayout() {
    return (
        <div className="bg-slate-200 min-h-dvh grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <PlantDatabaseContent />
            <Footer />
        </div>
    )
}