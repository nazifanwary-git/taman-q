import DashboardMenus from "./DashboardMenuLayout";
import HeroBanner from "./HeroBanner";


export default function DashboardContent() {
    return (
        <main>
            <HeroBanner />

            <DashboardMenus />
        </main>
    )
}