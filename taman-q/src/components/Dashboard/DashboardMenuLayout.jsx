import DashboardMenuCard from "./dashboardMenus/DashboardMenuCard";
import menuImg1 from "../../assets/menu1.jpg"
import menuImg2 from "../../assets/menu2.jpg"
import menuImg3 from "../../assets/menu3.jpg"
import { Link } from "react-router";

export default function DashboardMenus() {
    return (
        <div className="flex flex-col gap-5 mx-5 md:flex-row md:mx-10 pb-6 justify-center">

            <Link to={"/introduction"}>
                <DashboardMenuCard
                    menuImg={menuImg1}
                    imgAlt="Two Researchers in a hydroponic garden"
                    title="What is Hydroponic?"
                />
            </Link>

            <Link to={"/quickStartGuide"}>
                <DashboardMenuCard
                    menuImg={menuImg2}
                    imgAlt="Two hydroponic-grown seedlings"
                    title="Hydroponic Quick Start Guide"
                />
            </Link>

            <Link to={"/plantDatabase"}>
                <DashboardMenuCard
                    menuImg={menuImg3}
                    imgAlt="Assortment of leafy greens"
                    title="Plant Database"
                />
            </Link>
        </div>
    )
}