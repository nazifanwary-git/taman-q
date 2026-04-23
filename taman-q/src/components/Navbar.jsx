import { Link } from "react-router"

export default function Navbar() {
    return (
        <header className="flex justify-center items-center bg-sandGreen min-w-90 min-h-18">
            <Link to={"/"}>
                <h1 className="text-[32px] text-white font-semibold">Taman-Q</h1>
            </Link>
        </header>
    )
}