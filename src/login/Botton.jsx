import { useRef, useState } from "react";

const boton = ({ className = '', text = "Aceptar", type = "button", onClick = () => { }, style = "wow", svg, openHoverInfo = true }) => {
    if (svg === undefined)
        svg = (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"> <g id="Interface / Download"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g></svg>
        )
    const ref = useRef();
    const [width, setWidth] = useState(0);
    return (
        <button type={type} onClick={onClick} className={"w-fit flex items-center justify-center cursor-pointer"}>
            {
                style === "wow" &&
                (
                    <div ref={ref} className="relative group" onMouseEnter={(e) => {
                        setWidth(e.target.offsetWidth / 2)
                    }} onMouseOut={() => {
                        setWidth(0)
                    }}>

                        <div className="text-lg text-white pointer-events-none fill-[rgb(155,153,153)] flex items-center cursor-pointer pl-[0.9em] px-[1em] py-[0.7em] rounded-[15px] border-[none] active:scale-95 bg-[#212121] group-hover:bg-black">
                            <div className="group-hover:opacity-0 transition-opacity pointer-events-none">
                                {svg}
                            </div>
                            <div style={{
                                translate: width == 0 ? '0px 0px' : `calc(${width}px - 100%) 0px`, scale: 2
                            }} className="pointer-events-none absolute transition-all duration-300 group-hover:scale-125">
                                {svg}
                            </div>
                            <label className="group-hover:opacity-0 transition-opacity duration-500">
                                {text}
                            </label>
                        </div>
                    </div>
                )
            }
            {
                style === "wow-white" &&
                (
                    <div ref={ref} className="relative group" onMouseEnter={(e) => {
                        setWidth(e.target.offsetWidth / 2)
                    }} onMouseOut={() => {
                        setWidth(0)
                    }}>

                        <div className="text-lg text-black pointer-events-none fill-[rgb(155,153,153)] flex items-center cursor-pointer pl-[0.9em] px-[1em] py-[0.7em] rounded-[15px] border-[none] active:scale-95 bg-[#a0a0a0] group-hover:bg-white">
                            <div className="group-hover:opacity-0 transition-opacity pointer-events-none">
                                {svg}
                            </div>
                            <div style={{
                                translate: width == 0 ? '0px 0px' : `calc(${width}px - 100%) 0px`, scale: 2
                            }} className="pointer-events-none absolute transition-all duration-300 group-hover:scale-125">
                                {svg}
                            </div>
                            <label className="group-hover:opacity-0 transition-opacity duration-500">
                                {text}
                            </label>
                        </div>
                    </div>
                )
            }
            {
                style === "normal" && (
                    <div className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                        {svg}
                        {text}
                        {openHoverInfo && (
                            <div className="absolute opacity-0 -bottom-0 group-hover:-bottom-12 rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-all shadow-lg text-nowrap">
                                {text}
                            </div>)}
                    </div>
                )
            }

        </button>
    )
}

export default boton;