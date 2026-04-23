import Footer from "../Footer";
import Navbar from "../Navbar";
import QuickStartContent from "../QuickStartGuide/QuickStartContent";


export default function QuickStartGuideLayout() {
    return (
        <div className="bg-slate-200 min-h-dvh grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <QuickStartContent />
            <Footer />
        </div>
    )
}