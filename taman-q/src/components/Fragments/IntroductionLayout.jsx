import Footer from "../Footer.jsx"
import IntroductionContent from "../Introduction/IntroductionContent.jsx"
import Navbar from "../Navbar.jsx"

export default function IntroductionLayout() {
    return (
        <div className="bg-slate-200 min-h-dvh grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <IntroductionContent />
            <Footer />
        </div>
    )
}