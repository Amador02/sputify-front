import { useParams } from "react-router-dom";
import { Loader } from ".";
import { motion } from "framer-motion";
import { useState } from "react";

const BusquedaOr = () => {
    const { type1, searchTerm1, type2, searchTerm2 } = useParams();
    const [showing, setShowing] = useState(true);
    return (
        <div className="relative flex w-full h-full flex-col items-center justify-center">
            <div>{type1}</div>
            <div>{searchTerm1}</div>
            <div>{type2}</div>
            <div>{searchTerm2}</div>
            <button >Showing</button>
            <motion.div
                className="bg-[#122133] absolute top-0 left-0 w-full h-full items-center justify-center flex transition-all duration-300 z-10 "
                style={{ opacity: showing ? 1 : 0 }}
                onClick={() => setShowing(pr => !pr)}>
                <Loader />
            </motion.div>
        </div>
    )
}
export default BusquedaOr;