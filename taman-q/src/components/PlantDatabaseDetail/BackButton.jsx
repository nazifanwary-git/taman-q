import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function BackButton({ children }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)}
            className="flex gap-1 items-center w-full
            md:max-w-300">
            <ChevronLeft className="size-7 text-darkGreen md:size-8" />
            <span className="text-2xl text-darkGreen font-semibold
            md:text-3xl">
                {children}
            </span>
        </button>
    )
}