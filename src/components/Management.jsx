import { useState } from "react";
import Botton from '../login/Botton';

const management = () => {
    const [barOpened, setBarOpened] = useState(true);
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [loadInfo, setLoadInfo] = useState('');
    const [nacionality, setNacionality] = useState('');
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="py-4 h-full">
                <div style={{ width: barOpened ? '30vw' : '0' }} className='overflow-hidden items-center pt-4 pb-4 gap-4 transition-all bg-black h-full rounded-e-lg relative flex flex-col'>
                    <label className="text-xl font-bold">Gestión de Info.</label>
                    <Botton onClick={() => {
                        setType('load')
                    }} style="wow-white" text='Cargar Información' key='iniciar-sesion' svg={
                        <div className="p-1">
                            <svg width='24px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M3 4H21"
                                        stroke="#000"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19 4H5V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.0799 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V4ZM11 15V11.4142L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11.1868 8.39896C11.2053 8.38051 11.2242 8.36282 11.2436 8.34589C11.4269 8.13403 11.6978 8 12 8C12.3022 8 12.5731 8.13403 12.7564 8.34589C12.7758 8.36282 12.7947 8.38051 12.8132 8.39896L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071L13 11.4142V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15Z"
                                        fill="#000"
                                    />
                                </g>
                            </svg>

                        </div>
                    } />
                    <Botton onClick={() => {
                        setType('addartist');
                    }} style="wow-white" text='Agregar Artista' key='iniciar-sesion' svg={
                        <div className="p-1">
                            <svg width='24px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M4 12H20M12 4V20"
                                        stroke="#000"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                    } />
                </div>
            </div>
            <div className="w-10 h-10 relative">
                <div className="rounded-e-full w-10 h-10 bg-black cursor-pointer" onClick={() => setBarOpened(p => !p)}>
                    <svg style={{ rotate: barOpened ? "-180deg" : "0deg" }} className="absolute h-full transition-all duration-300 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"></path> </svg>
                </div>
            </div>
            <div className="grow">
                {
                    !type && (
                        <div className="w-full text-center">Selecciona una opción a la izquierda</div>
                    )
                }
                {
                    type === 'addartist' && (
                        <div className="flex w-full h-full items-center justify-center">
                            <div className="flex w-96 flex-col rounded-xl bg-[#fff] bg-clip-border text-gray-700 shadow-md p-2">
                                <div className="flex flex-col gap-4 p-6 items-center">
                                    <label className="font-semibold text-black text-xl">Creación de Artistas</label>
                                    {tf(setName, 'text', 'Nombre', name)}
                                    {tf(setNacionality, 'text', 'Nacionalidad', nacionality)}
                                    <label
                                        className="relative text-black flex cursor-pointer w-fit items-center justify-center gap-[1em]"
                                        htmlFor="tick"
                                    >
                                        <input
                                            className="peer appearance-none"
                                            id="tick"
                                            name="tick"
                                            type="checkbox"
                                        />
                                        <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-black"></span>
                                        <svg
                                            viewBox="0 0 69 89"
                                            className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                                            fill="none"
                                            height={89}
                                            width={69}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                                                strokeWidth="6px"
                                                stroke="#000"
                                                pathLength={100}
                                            />
                                        </svg>
                                        <p className="text-[1em] font-bold [user-select:none]">Es un grupo</p>
                                    </label>

                                </div>
                                <div className='items-center justify-center flex'>
                                    <Botton onClick={() => {
                                        alert("Agregado")
                                    }} text='Agregar' key='iniciar-sesion' svg={
                                        <div className="p-1">
                                            <svg width='24px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M4 12H20M12 4V20"
                                                        stroke="#fff"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    } />
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    type === 'load' && (
                        <div className="flex w-full h-full items-center justify-center">
                            <div className="flex w-[40rem] flex-col rounded-xl bg-[#fff] bg-clip-border text-gray-700 shadow-md p-2">
                                <div className="flex flex-col gap-4 p-6 items-center">
                                    <label className="font-semibold text-black text-xl">Cargar Información</label>
                                    <textarea defaultValue={loadInfo} onChange={(e) => setLoadInfo(e.target.value)} className="bg-white border-2 border-black rounded-lg w-full min-h-24" />

                                </div>
                                <div className='items-center justify-center flex'>
                                    <Botton onClick={() => {
                                        alert(loadInfo)
                                    }} text='Cargar' key='iniciar-sesion' svg={
                                        <div className="p-1">
                                            <svg width='24px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M3 4H21"
                                                        stroke="#fff"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M19 4H5V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.0799 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V4ZM11 15V11.4142L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11.1868 8.39896C11.2053 8.38051 11.2242 8.36282 11.2436 8.34589C11.4269 8.13403 11.6978 8 12 8C12.3022 8 12.5731 8.13403 12.7564 8.34589C12.7758 8.36282 12.7947 8.38051 12.8132 8.39896L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071L13 11.4142V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15Z"
                                                        fill="#fff"
                                                    />
                                                </g>
                                            </svg>

                                        </div>
                                    } />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex items-end h-full gap-2 p-2">
                <div onClick={() => {
                    //prev
                }} className="cursor-pointer -left-24 w-10 h-10 bottom-3 rounded-full bg-black z-10 fill-white hover:fill-gray-400 transition-all flex flex-row items-center justify-center" >
                    <svg viewBox="0 0 24 24" width="24px" ><path d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z" ></path></svg>
                </div>
                <div onClick={() => {
                    //sig

                }} className="-scale-x-100 cursor-pointer -left-12 w-10 h-10 bottom-3 rounded-full bg-black z-10 fill-white hover:fill-gray-400 transition-all flex flex-row items-center justify-center" >
                    <svg viewBox="0 0 24 24" width="24px" ><path d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z" ></path></svg>
                </div>

            </div>
        </div>
    )
}
export default management;


const tf = (setValue, type, placeholder, initialValue) => {
    return (
        <div className="relative h-11 w-full min-w-[200px]">
            <input
                defaultValue={initialValue}
                type={type}
                placeholder=""
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                onChange={(e) => setValue(e.target.value)}
            />
            <label
                className=" before:content[''] after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >{placeholder}</label>
        </div>
    )
}