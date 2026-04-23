import DashboardContent from "../Dashboard/DashboardContent";
import Footer from "../Footer.jsx"
import Navbar from "../Navbar.jsx"

export default function DashboardLayout() {
    return (
        <div className="bg-slate-200 min-h-dvh grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <DashboardContent />
            <Footer />
        </div>
    )
}